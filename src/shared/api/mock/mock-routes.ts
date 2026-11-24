// TODO: 백엔드 개발 서버로 확인할 수 있게 되면 삭제 예정 (임시 API 경로)
// 경로·상태 코드·오류 코드는 백엔드 컨트롤러와 RecruitmentService의 동작을 따른다.
import type {
  AnswerRequest,
  ArchiveItemResponse,
  ArchivePageResponse,
  MyApplicationResponse,
  QuestionResponse,
} from '@/shared/api/types';
import type { UserMe } from '@/shared/api/user';

import {
  MOCK_ACTIVITIES,
  MOCK_BLOGS,
  MOCK_FAQS,
  MOCK_PROJECTS,
  MOCK_REVIEWS,
} from './data/content';
import { MOCK_CURRICULUMS } from './data/curriculum';
import { MOCK_QUESTIONS, MOCK_RECRUITMENT } from './data/recruitment';

export class MockApiError extends Error {
  readonly status: number;
  readonly errorCode: string;

  constructor(status: number, errorCode: string, message: string) {
    super(message);
    this.status = status;
    this.errorCode = errorCode;
  }
}

export interface MockRequest {
  method: string;
  path: string;
  params: Record<string, string>;
  query: URLSearchParams;
  body: unknown;
  isLoggedIn: boolean;
}

interface MockRoute {
  method: 'GET' | 'POST' | 'PUT';
  /** `:이름`은 경로 변수. 고정 경로를 경로 변수보다 앞에 둔다. */
  pattern: string;
  handler: (request: MockRequest) => { status?: number; data: unknown };
}

const MOCK_USER: UserMe = { nickname: '테스트 지원자', member_type: 'OUTSIDER' };

/** 임시저장·제출 상태. 로그인 사용자는 한 명으로 보고 공고별로 한 건만 둔다. 새로고침하면 비워진다. */
const applications = new Map<number, MyApplicationResponse>();
const subscribedEmails = new Set<string>();
let nextApplicantId = 1;

const requireLogin = ({ isLoggedIn }: MockRequest) => {
  if (!isLoggedIn) {
    throw new MockApiError(401, 'TOKEN_NOT_FOUND', '토큰이 존재하지 않습니다.');
  }
};

const findRecruitment = (recruitmentId: number) => {
  if (recruitmentId !== MOCK_RECRUITMENT.recruitment_id) {
    throw new MockApiError(404, 'RECRUITMENT_NOT_FOUND', '해당 모집 공고를 찾을 수 없습니다.');
  }
  return MOCK_RECRUITMENT;
};

/** 모집 기간이 아니면 백엔드처럼 막는다. data/recruitment.ts의 is_active를 false로 바꾸면 마감 상태를 확인할 수 있다. */
const assertRecruitmentOpen = () => {
  if (!MOCK_RECRUITMENT.is_active) {
    throw new MockApiError(409, 'RECRUITMENT_CLOSED', '모집이 마감되었습니다.');
  }
};

const isBlank = (answer: unknown): boolean => {
  if (answer === undefined || answer === null) {
    return true;
  }
  if (typeof answer === 'string') {
    return !answer.trim();
  }
  if (typeof answer === 'object') {
    return !Object.values(answer).some((value) =>
      Array.isArray(value) ? value.length > 0 : Boolean(value)
    );
  }
  return false;
};

/**
 * 백엔드처럼 지원 부문 문항과 공통 문항 중 필수 문항에 답이 없으면 제출을 막는다.
 * shortcut: 인적 사항 필수값, 전화번호 형식, 문항 ID·답변 타입 검사는 하지 않는다. 제출 검증 자체를 확인할 때는 백엔드 개발 서버를 쓴다.
 */
const assertRequiredAnswers = (track: string, answers: AnswerRequest[]) => {
  const answered = new Map(answers.map((item) => [item.question_id, item.answer]));
  const missing = MOCK_QUESTIONS.filter(
    (q) => (q.category === 'COMMON' || q.category === track) && q.is_required
  ).find((q) => isBlank(answered.get(q.question_id ?? 0)));
  if (missing) {
    throw new MockApiError(400, 'ANSWER_REQUIRED', `필수 문항에 답변해 주세요. (${missing.label})`);
  }
};

const toPage = (items: ArchiveItemResponse[], query: URLSearchParams): ArchivePageResponse => {
  const page = Math.max(1, Number(query.get('page') ?? 1));
  const size = Math.max(1, Number(query.get('size') ?? 6));
  const totalPages = Math.ceil(items.length / size);
  const posts = items.slice((page - 1) * size, page * size);
  return {
    current_page: page,
    total_pages: totalPages,
    size,
    current_size: posts.length,
    total_size: items.length,
    has_previous: page > 1,
    has_next: page < totalPages,
    posts,
  };
};

/** 검색어는 백엔드처럼 제목에서만, 대소문자와 공백을 무시하고 찾는다. */
const normalize = (text: string) => text.toLowerCase().replace(/\s/g, '');

const filterArchive = (items: ArchiveItemResponse[], query: URLSearchParams) => {
  const track = query.get('track');
  const term = query.get('term');
  const keyword = normalize(query.get('keyword') ?? '');
  return items.filter(
    (item) =>
      (!track || track === 'ALL' || item.track === track) &&
      (term === null || item.term === Number(term)) &&
      (!keyword || normalize(item.title ?? '').includes(keyword))
  );
};

export const MOCK_ROUTES: MockRoute[] = [
  {
    method: 'POST',
    pattern: '/api/v1/auth/user/refresh',
    // 임시 API에는 새로고침 토큰(쿠키)이 없어 항상 실패한다. 로그인은 /auth/callback#token=... 으로 한다.
    handler: () => {
      throw new MockApiError(401, 'TOKEN_NOT_FOUND', '토큰이 존재하지 않습니다.');
    },
  },
  { method: 'POST', pattern: '/api/v1/auth/user/logout', handler: () => ({ data: null }) },
  {
    method: 'GET',
    pattern: '/api/v1/users/me',
    handler: (request) => {
      requireLogin(request);
      return { data: MOCK_USER };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/recruitment/status',
    handler: () => ({
      data: { is_active: MOCK_RECRUITMENT.is_active, term: MOCK_RECRUITMENT.term },
    }),
  },
  {
    method: 'GET',
    pattern: '/api/v1/recruitment/deadline',
    handler: () => {
      if (!MOCK_RECRUITMENT.is_active) {
        throw new MockApiError(404, 'RECRUITMENT_NOT_FOUND', '해당 모집 공고를 찾을 수 없습니다.');
      }
      return {
        data: {
          deadline: MOCK_RECRUITMENT.end_date,
          recruitment_id: MOCK_RECRUITMENT.recruitment_id,
        },
      };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/recruitment/questions',
    handler: ({ query }) => {
      findRecruitment(Number(query.get('recruitmentId')));
      if (!MOCK_RECRUITMENT.is_active) {
        throw new MockApiError(
          400,
          'RECRUITMENT_NOT_AVAILABLE',
          '현재 지원 가능한 기간이 아닙니다.'
        );
      }
      const track = query.get('track');
      if (!track || track === 'ALL') {
        throw new MockApiError(400, 'INVALID_INPUT_VALUE', '지원 부문을 선택해 주세요.');
      }
      const questions: QuestionResponse[] = MOCK_QUESTIONS.filter(
        (q) => q.category === 'COMMON' || q.category === track
      ).sort((a, b) => (a.order_num ?? 0) - (b.order_num ?? 0));
      return { data: questions };
    },
  },
  {
    method: 'POST',
    pattern: '/api/v1/recruitment/subscriptions',
    handler: ({ body }) => {
      const email = String((body as { email?: unknown })?.email ?? '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new MockApiError(400, 'INVALID_EMAIL_FORMAT', '이메일 형식이 올바르지 않습니다.');
      }
      if (subscribedEmails.has(email)) {
        throw new MockApiError(409, 'DUPLICATE_EMAIL', '이미 구독 신청된 이메일입니다.');
      }
      subscribedEmails.add(email);
      return {
        status: 201,
        data: { id: subscribedEmails.size, email, created_at: new Date().toISOString() },
      };
    },
  },
  {
    method: 'POST',
    pattern: '/api/v1/recruitment/:recruitmentId/applications',
    handler: (request) => {
      requireLogin(request);
      const recruitmentId = Number(request.params.recruitmentId);
      findRecruitment(recruitmentId);
      assertRecruitmentOpen();
      const saved = applications.get(recruitmentId);
      if (saved?.status === 'SUBMITTED') {
        throw new MockApiError(409, 'ALREADY_SUBMITTED', '이미 제출된 지원서가 있습니다.');
      }
      const body = request.body as { track?: string; answers?: unknown };
      if (!body?.track || body.track === 'ALL') {
        throw new MockApiError(400, 'INVALID_INPUT_VALUE', '지원 부문을 선택해 주세요.');
      }
      if (!Array.isArray(body.answers)) {
        throw new MockApiError(400, 'INVALID_INPUT_VALUE', '답변 형식이 올바르지 않습니다.');
      }
      assertRequiredAnswers(body.track, body.answers as AnswerRequest[]);
      const applicantId = saved?.applicant_id ?? nextApplicantId++;
      const now = new Date().toISOString();
      applications.set(recruitmentId, {
        ...(body as MyApplicationResponse),
        applicant_id: applicantId,
        status: 'SUBMITTED',
        updated_at: now,
      });
      return { status: 201, data: { applicant_id: applicantId, submitted_at: now } };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/recruitment/:recruitmentId/applications/me',
    handler: (request) => {
      requireLogin(request);
      const recruitmentId = Number(request.params.recruitmentId);
      findRecruitment(recruitmentId);
      const saved = applications.get(recruitmentId);
      if (!saved) {
        throw new MockApiError(404, 'APPLICATION_NOT_FOUND', '지원서를 찾을 수 없습니다.');
      }
      if (saved.status === 'SUBMITTED') {
        throw new MockApiError(
          403,
          'APPLICATION_ALREADY_SUBMITTED',
          '제출된 지원서에 접근할 수 없습니다.'
        );
      }
      return { data: saved };
    },
  },
  {
    method: 'PUT',
    pattern: '/api/v1/recruitment/:recruitmentId/applications/draft',
    handler: (request) => {
      requireLogin(request);
      const recruitmentId = Number(request.params.recruitmentId);
      findRecruitment(recruitmentId);
      assertRecruitmentOpen();
      const saved = applications.get(recruitmentId);
      if (saved?.status === 'SUBMITTED') {
        throw new MockApiError(
          403,
          'APPLICATION_ALREADY_SUBMITTED',
          '제출된 지원서에 접근할 수 없습니다.'
        );
      }
      // 백엔드처럼 보낸 값만 바꾸고, 빠지거나 null인 값(answers 포함)은 이전 임시저장 값을 유지한다.
      const changes = Object.fromEntries(
        Object.entries((request.body ?? {}) as Record<string, unknown>).filter(
          ([, value]) => value !== undefined && value !== null
        )
      );
      const applicantId = saved?.applicant_id ?? nextApplicantId++;
      const now = new Date().toISOString();
      applications.set(recruitmentId, {
        ...saved,
        ...(changes as MyApplicationResponse),
        applicant_id: applicantId,
        status: 'DRAFT',
        created_at: saved?.created_at ?? now,
        updated_at: now,
      });
      return { data: { applicant_id: applicantId } };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/recruitment/:term',
    handler: ({ params }) => {
      if (Number(params.term) !== MOCK_RECRUITMENT.term) {
        throw new MockApiError(404, 'RECRUITMENT_NOT_FOUND', '해당 모집 공고를 찾을 수 없습니다.');
      }
      return { data: MOCK_RECRUITMENT };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/reviews',
    handler: ({ query }) => {
      const track = query.get('track');
      const term = query.get('term');
      return {
        data: MOCK_REVIEWS.filter(
          (review) =>
            (!track || track === 'ALL' || review.track === track) &&
            (term === null || review.term === Number(term))
        ),
      };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/curriculums',
    handler: ({ query }) => {
      const track = query.get('track');
      return {
        data: MOCK_CURRICULUMS.filter((c) => !track || track === 'ALL' || c.track === track),
      };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/archiving/projects',
    handler: ({ query }) => ({ data: toPage(filterArchive(MOCK_PROJECTS, query), query) }),
  },
  {
    method: 'GET',
    pattern: '/api/v1/archiving/blogs',
    handler: ({ query }) => ({ data: toPage(filterArchive(MOCK_BLOGS, query), query) }),
  },
  {
    method: 'GET',
    pattern: '/api/v1/archiving/activities',
    handler: ({ query }) => ({ data: toPage(filterArchive(MOCK_ACTIVITIES, query), query) }),
  },
  {
    method: 'GET',
    pattern: '/api/v1/archiving/terms',
    handler: () => {
      const terms = [...new Set([...MOCK_PROJECTS, ...MOCK_ACTIVITIES].map((i) => i.term ?? 0))];
      return {
        data: {
          terms: terms
            .sort((a, b) => b - a)
            .map((value) => ({ value, label: value === 0 ? '7기 이전' : `${value}기` })),
        },
      };
    },
  },
  {
    method: 'GET',
    pattern: '/api/v1/archiving/faqs',
    handler: ({ query }) => {
      const category = query.get('category');
      return {
        data: MOCK_FAQS.filter((faq) => !category || faq.category === category).sort(
          (a, b) => (a.order_num ?? 0) - (b.order_num ?? 0)
        ),
      };
    },
  },
];
