/**
 * 로컬 개발용 임시 API. client.ts가 개발 서버에서 VITE_API_BASE_URL이 없을 때만 이 어댑터를 쓴다.
 * 백엔드와 같은 경로로 요청을 받아 같은 모양({ status, data } / { status, error_code, message })으로 응답한다.
 * 데이터는 mock/data/의 MOCK_* 상수이고, 임시저장·제출 상태는 메모리에만 있어 새로고침하면 처음으로 돌아간다.
 * 로그인: 개발 서버에서 /auth/callback#token=mock-access-token 으로 들어가면 로그인 상태가 된다.
 *
 * TODO: 백엔드 개발 서버로 확인할 수 있게 되면 mock/ 폴더와 client.ts의 분기를 함께 삭제
 */
import {
  AxiosError,
  AxiosHeaders,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { MOCK_ROUTES, MockApiError, type MockRequest } from './mock-routes';

/** 화면의 로딩 상태가 보이도록 넣는 응답 지연. */
const MOCK_DELAY_MS = 150;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/** `/api/v1/recruitment/:term` 같은 패턴과 실제 경로를 비교해 경로 변수를 돌려준다. 맞지 않으면 null. */
const matchPath = (pattern: string, path: string): Record<string, string> | null => {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = path.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) {
    return null;
  }
  const params: Record<string, string> = {};
  for (let i = 0; i < patternParts.length; i += 1) {
    const part = patternParts[i];
    if (part.startsWith(':')) {
      params[part.slice(1)] = decodeURIComponent(pathParts[i]);
    } else if (part !== pathParts[i]) {
      return null;
    }
  }
  return params;
};

const toRequest = (config: InternalAxiosRequestConfig): Omit<MockRequest, 'params'> => {
  const url = new URL(config.url ?? '', 'http://mock.local/');
  const query = new URLSearchParams(url.search);
  Object.entries((config.params ?? {}) as Record<string, unknown>).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, String(value));
    }
  });

  let body: unknown = config.data;
  if (typeof config.data === 'string' && config.data) {
    try {
      body = JSON.parse(config.data);
    } catch {
      body = config.data;
    }
  }

  const authorization = AxiosHeaders.from(config.headers).get('Authorization');
  return {
    method: (config.method ?? 'get').toUpperCase(),
    path: url.pathname,
    query,
    body,
    isLoggedIn: typeof authorization === 'string' && authorization.startsWith('Bearer '),
  };
};

const toResponse = (
  config: InternalAxiosRequestConfig,
  status: number,
  data: unknown
): AxiosResponse => ({
  data,
  status,
  statusText: String(status),
  headers: {},
  config,
  request: {},
});

export const mockAdapter = async (config: InternalAxiosRequestConfig): Promise<AxiosResponse> => {
  await wait(MOCK_DELAY_MS);

  try {
    const request = toRequest(config);
    for (const route of MOCK_ROUTES) {
      if (route.method !== request.method) {
        continue;
      }
      const params = matchPath(route.pattern, request.path);
      if (params) {
        const { status = 200, data } = route.handler({ ...request, params });
        return toResponse(config, status, { status, data });
      }
    }
    throw new MockApiError(
      404,
      'NOT_FOUND',
      `임시 API에 없는 경로입니다: ${request.method} ${request.path}`
    );
  } catch (error) {
    // 예상 못 한 오류도 백엔드 500처럼 config·response를 갖춘 AxiosError로 바꿔 인터셉터와 isAxiosError가 그대로 동작하게 한다.
    const apiError =
      error instanceof MockApiError
        ? error
        : new MockApiError(
            500,
            'INTERNAL_SERVER_ERROR',
            error instanceof Error ? error.message : '임시 API 처리 중 오류가 발생했습니다.'
          );
    const response = toResponse(config, apiError.status, {
      status: apiError.status,
      data: null,
      error_code: apiError.errorCode,
      message: apiError.message,
    });
    throw new AxiosError(
      apiError.message,
      apiError.status >= 500 ? AxiosError.ERR_BAD_RESPONSE : AxiosError.ERR_BAD_REQUEST,
      config,
      {},
      response
    );
  }
};
