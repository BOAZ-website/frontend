import { useState } from 'react';

import ApplyAgreementSection from '@/shared/components/apply-agreement-section/apply-agreement-section';
import Button from '@/shared/components/button/button';

import * as styles from './agreement-step.css';

interface AgreementStepProps {
  onNext: () => void;
  term?: number;
}

const AgreementStep = ({ onNext, term }: AgreementStepProps) => {
  const [agreed, setAgreed] = useState(false);
  const [consentOpen, setConsentOpen] = useState(false);

  const handleSubmit = () => {
    if (!agreed) {
      return;
    }
    onNext();
  };

  return (
    <div className={styles.container}>
      <ApplyAgreementSection
        title="모집 안내"
        description={`국내 최초 빅데이터 연합동아리 🐘BOAZ🐘에서 ${term ? `${term}기 ` : ''}신입회원을 모집합니다! \n보아즈는 '데이터 분석', '데이터 시각화', '데이터 엔지니어링' 총 세 부문에서 신입 회원을 모집하고 있습니다. \n각 부문별 신입 회원은 기본기를 익힐 수 있는 BASE Session, 직접 문제를 정의하고 해결해보는 ADVance \nSession을 통해 빅데이터 전문성을 쌓게 됩니다. 뿐만 아니라 멘토-멘티 스터디를 비롯한 다양한 스터디, \n부문 공동세션 등을 통해 자신이 추가로 관심 있는 영역에서 역량을 키울 수 있습니다.`}
      />
      <ApplyAgreementSection
        title="홍보 책자"
        link={{
          label: `BOAZ ${term ? `${term}기 ` : ''}신입회원 홍보책자 자세히 보기`,
          href: 'https://drive.google.com/file/d/1l20dc5gkEbSvl-MJBuJjrm9DanqbiTi1/view',
        }}
        description="책자에 동아리의 자세한 활동 내용 및 커리큘럼이 수록되어 있습니다."
      />
      <ApplyAgreementSection
        title="BOAZ SlideShare"
        link={{
          label: 'BOAZ SlideShare 자세히 보기',
          href: 'https://www.slideshare.net/BOAZbigdata?tab=presentations',
        }}
        description="SlideShare에서 지금까지 BOAZ 컨퍼런스에서 진행한 프로젝트를 보실 수 있습니다."
      />

      <div className={styles.footer}>
        <div className={styles.consentWrapper}>
          <label className={styles.checkboxRow}>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxLabel}>[필수] 개인정보 수집·이용에 동의합니다</span>
            <button
              type="button"
              className={styles.viewFullButton}
              onClick={() => setConsentOpen((prev) => !prev)}
            >
              {consentOpen ? '접기' : '전문 보기'}
            </button>
          </label>

          {consentOpen && (
            <div className={styles.consentDetail}>
              <p className={styles.consentIntro}>
                빅데이터 연합동아리 BOAZ는 동아리 모집 지원서 접수 및 선발을 위해 아래와 같이
                개인정보를 수집·이용합니다.
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
                    <td>이름, 이메일, 연락처, 대학, 전공, 지원 트랙</td>
                    <td>동아리 모집 지원서 접수 및 선발 절차 진행</td>
                    <td>
                      미선발 시 선발 결과 발표 후 30일 이내 파기 / 선발 시 동아리 활동 종료까지 보관
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.consentNote}>
                귀하는 위 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다. 다만, 위 항목은
                지원서 접수에 반드시 필요한 정보이므로 동의하지 않을 경우 지원서를 제출할 수
                없습니다.
              </p>
              <p className={styles.consentNote}>
                자세한 사항은{' '}
                <a href="/privacy" target="_blank" rel="noreferrer" className={styles.consentLink}>
                  개인정보처리방침
                </a>
                에서 확인할 수 있습니다.
              </p>
            </div>
          )}
        </div>

        <Button preset="wide_primary" disabled={!agreed} onClick={handleSubmit}>
          지원서 작성
        </Button>
      </div>
    </div>
  );
};

export default AgreementStep;
