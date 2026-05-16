import { useState } from 'react';
import clsx from 'clsx';

import type { Track } from '@/shared/api/types';
import ApplyAgreementSection from '@/shared/components/apply-agreement-section/apply-agreement-section';
import Button from '@/shared/components/button/button';
import RadioButton from '@/shared/components/radio-button/radio-button';

import * as styles from './agreement-step.css';

const TRACK_OPTIONS: { label: string; value: Track }[] = [
  { label: '데이터 분석', value: 'ANALYSIS' },
  { label: '데이터 시각화', value: 'VISUALIZATION' },
  { label: '데이터 엔지니어링', value: 'ENGINEERING' },
];

interface AgreementStepProps {
  onNext: (track: Track) => void;
}

const AgreementStep = ({ onNext }: AgreementStepProps) => {
  const [track, setTrack] = useState<Track | null>(null);
  const [agreed, setAgreed] = useState(false);

  const canProceed = track !== null && agreed;

  const handleSubmit = () => {
    if (!canProceed || !track) {
      return;
    }
    onNext(track);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        <ApplyAgreementSection
          title="모집 안내"
          description="국내 최초 빅데이터 연합동아리 🐘BOAZ🐘에서 27기 신입회원을 모집합니다! 보아스는 '데이터 분석', '데이터 시각화', '데이터 엔지니어링' 총 세 부문에서 신입 회원을 모집하고 있습니다. 각 부문별 신입 회원은 기본기를 익힐 수 있는 BASE Session, 직접 문제를 정의하고 해결해보는 ADVance Session을 통해 빅데이터 전문성을 쌓게 됩니다. 뿐만 아니라 멘토-멘티 스터디를 비롯한 다양한 스터디, 부문 공동세션 등을 통해 자신이 추가로 관심 있는 영역에서 역량을 키울 수 있습니다."
        />
        <ApplyAgreementSection
          title="홍보 책자"
          link={{
            label: 'BOAZ 27기 신입회원 홍보책자 자세히 보기',
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
      </div>

      <section className={styles.trackSection}>
        <h2 className={styles.trackTitle}>부문을 선택해주세요</h2>
        <div className={styles.trackOptions}>
          {TRACK_OPTIONS.map((option) => (
            <label
              key={option.value}
              className={clsx(styles.trackCard, track === option.value && styles.trackCardSelected)}
            >
              <RadioButton
                name="track"
                label={option.label}
                value={option.value}
                checked={track === option.value}
                onChange={(value) => setTrack(value as Track)}
              />
            </label>
          ))}
        </div>
      </section>

      <div className={styles.footer}>
        <label className={styles.checkboxRow}>
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className={styles.checkbox}
          />
          <span className={styles.checkboxLabel}>개인정보 필수항목 수집 및 이용 동의</span>
          <button type="button" className={styles.viewFullButton}>
            전문 보기
          </button>
        </label>

        <Button preset="wide_primary" disabled={!canProceed} onClick={handleSubmit}>
          지원서 작성
        </Button>
      </div>
    </div>
  );
};

export default AgreementStep;
