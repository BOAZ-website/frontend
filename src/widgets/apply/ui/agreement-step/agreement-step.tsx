import { type ReactNode, useId, useState } from 'react';

import ApplyAgreementSection from '@/shared/components/apply-agreement-section/apply-agreement-section';
import Button from '@/shared/components/button/button';
import { getTrackFullLabel } from '@/shared/utils/track-label';

import * as styles from './agreement-step.css';

interface AgreementStepProps {
  onNext: () => void;
  term?: number;
  brochureUrl?: string;
}

interface ConsentItemProps {
  title: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  children: ReactNode;
}

/** 필수 동의 한 개: 체크박스와, 체크 상태와 따로 여닫는 전문. */
const ConsentItem = ({ title, checked, onCheckedChange, children }: ConsentItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailId = useId();

  return (
    <div className={styles.consentWrapper}>
      <div className={styles.checkboxRow}>
        <label className={styles.checkboxLabelGroup}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckedChange(e.target.checked)}
            className={styles.checkbox}
          />
          <span className={styles.checkboxLabel}>{title}</span>
        </label>
        <button
          type="button"
          className={styles.viewFullButton}
          aria-expanded={isOpen}
          aria-controls={detailId}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? '접기' : '전문 보기'}
        </button>
      </div>

      <div
        id={detailId}
        className={`${styles.consentDetail} ${isOpen ? styles.consentDetailOpen : ''}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

const AgreementStep = ({ onNext, term, brochureUrl }: AgreementStepProps) => {
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState(false);
  const [isAiEthicsAgreed, setIsAiEthicsAgreed] = useState(false);
  const isAllAgreed = isPrivacyAgreed && isAiEthicsAgreed;

  const handleSubmit = () => {
    if (!isAllAgreed) {
      return;
    }
    onNext();
  };

  return (
    <div className={styles.container}>
      <ApplyAgreementSection
        title="모집 안내"
        description={`국내 최초 빅데이터 연합동아리 🐘BOAZ🐘에서 ${term ? `${term}기 ` : ''}신입회원을 모집합니다! 보아즈는 '${getTrackFullLabel('ANALYSIS', term)}', '${getTrackFullLabel('VISUALIZATION', term)}', '${getTrackFullLabel('ENGINEERING', term)}' 총 세 부문에서 신입 회원을 모집하고 있습니다. 각 부문별 신입 회원은 기본기를 익힐 수 있는 BASE Session, 직접 문제를 정의하고 해결해보는 ADVance Session을 통해 빅데이터 전문성을 쌓게 됩니다. 뿐만 아니라 멘토-멘티 스터디를 비롯한 다양한 스터디, 부문 병행 제도 등을 통해 자신이 추가로 관심 있는 영역에서 역량을 키울 수 있습니다.`}
      />
      {brochureUrl && (
        <ApplyAgreementSection
          title="홍보 책자"
          link={{
            label: `BOAZ ${term ? `${term}기 ` : ''}신입회원 홍보책자 자세히 보기`,
            href: brochureUrl,
          }}
          description="책자에 동아리의 자세한 활동 내용 및 커리큘럼이 수록되어 있습니다."
        />
      )}
      <ApplyAgreementSection
        title="BOAZ SlideShare"
        link={{
          label: 'BOAZ SlideShare 자세히 보기',
          href: 'https://www.slideshare.net/BOAZbigdata?tab=presentations',
        }}
        description="SlideShare에서 지금까지 BOAZ 컨퍼런스에서 진행한 프로젝트를 보실 수 있습니다."
      />

      <div className={styles.footer}>
        <ConsentItem
          title="[필수] 개인정보 수집·이용 동의"
          checked={isPrivacyAgreed}
          onCheckedChange={setIsPrivacyAgreed}
        >
          <p className={styles.consentIntro}>
            빅데이터 연합동아리 BOAZ는 동아리 모집 지원서 접수와 선발을 위해 아래와 같이 개인정보를
            수집·이용합니다.
          </p>
          <table className={styles.consentTable}>
            <thead>
              <tr>
                <th>수집 항목</th>
                <th>수집·이용 목적</th>
                <th>보유·이용 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  이름, 생년월일, 이메일, 휴대전화번호, 대학, 전공(부전공·복수전공 포함), 학년·학기,
                  졸업 예정 연월, 병역 여부, 대학원 진학 여부, 지원 부문, 지원서 문항 답변
                </td>
                <td>
                  지원서 접수, 서류・면접 평가, 활동 가능 기간 확인, 결과 안내, 선발 후 공지 전달과
                  문의 응대
                </td>
                <td>
                  미선발 시 최종 결과 발표일로부터 30일 이내 파기 / 선발 시 해당 기수 활동
                  종료일로부터 3개월 이내 파기
                </td>
              </tr>
            </tbody>
          </table>
          <p className={styles.consentNote}>
            선발 결과 등 안내 문자는 ㈜다우기술(뿌리오)에 위탁해 발송합니다.
          </p>
          <p className={styles.consentNote}>
            귀하는 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다. 다만 동의하지 않으면
            지원서를 제출할 수 없습니다.
          </p>
          <p className={styles.consentNote}>
            자세한 사항은{' '}
            <a href="/privacy" target="_blank" rel="noreferrer" className={styles.consentLink}>
              개인정보 처리방침
            </a>
            에서 확인할 수 있습니다.
          </p>
        </ConsentItem>

        <ConsentItem
          title="[필수] AI 활용 및 지원서 작성 윤리 동의"
          checked={isAiEthicsAgreed}
          onCheckedChange={setIsAiEthicsAgreed}
        >
          <p className={styles.consentNote}>
            지원서 작성 과정에서 생성형 AI를 활용할 수 있으나, 지원서에 기재된 모든 내용은 지원자
            본인의 실제 경험과 생각을 바탕으로 작성되어야 합니다.
          </p>
          <p className={styles.consentNote}>
            AI 활용 여부와 관계없이 지원서 내용의 진실성 및 정확성에 대한 책임은 지원자 본인에게
            있으며, 허위 사실 기재, 타인의 경험 도용 등 비윤리적인 작성 행위를 하지 않았음을
            확인합니다.
          </p>
        </ConsentItem>

        <Button preset="wide_primary" disabled={!isAllAgreed} onClick={handleSubmit}>
          지원서 작성
        </Button>
      </div>
    </div>
  );
};

export default AgreementStep;
