import ApplySection from '@/widgets/recruiting/ui/apply-section/apply-section';
import RecruitingBottomSection from '@/widgets/recruiting/ui/recruiting-bottom-section/recruiting-bottom-section';
import RecruitingHeroSection from '@/widgets/recruiting/ui/recruiting-hero-section/recruiting-hero-section';
import RecruitmentStatusSection from '@/widgets/recruiting/ui/recruitment-status-section/recruitment-status-section';
import TargetSection from '@/widgets/recruiting/ui/target-section/target-section';
import TimelineSection from '@/widgets/recruiting/ui/timeline-section/timeline-section';
import ValueSection from '@/widgets/recruiting/ui/value-section/value-section';

import * as styles from './recruiting-page.css';

const RecruitingPage = () => {
  return (
    <main className={styles.page}>
      <RecruitingHeroSection />
      <section className={styles.statusSection}>
        <RecruitmentStatusSection startDate="2026-10-08" endDate="2026-12-10" isActive={true} />
      </section>
      <section className={styles.timelineSection}>
        <TimelineSection />
      </section>
      <section className={styles.applySection}>
        <ApplySection />
      </section>
      <section className={styles.bottomSection}>
        <RecruitingBottomSection brochureUrl="#" />
      </section>
      <section className={styles.targetSection}>
        <TargetSection />
      </section>
      <section className={styles.valueSection}>
        <ValueSection />
      </section>
    </main>
  );
};

export default RecruitingPage;
