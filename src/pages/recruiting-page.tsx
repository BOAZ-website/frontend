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
        <RecruitmentStatusSection />
      </section>
      <section className={styles.targetSection}>
        <TargetSection />
      </section>
      <section className={styles.valueSection}>
        <ValueSection />
      </section>
      <TimelineSection />
      <section className={styles.applySection}>
        <ApplySection />
      </section>
      <section className={styles.bottomSection}>
        <RecruitingBottomSection />
      </section>
    </main>
  );
};

export default RecruitingPage;
