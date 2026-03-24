import RecruitingHeroSection from '@/widgets/recruiting/ui/recruiting-hero-section/recruiting-hero-section';
import RecruitmentStatusSection from '@/widgets/recruiting/ui/recruitment-status-section/recruitment-status-section';
import TargetSection from '@/widgets/recruiting/ui/target-section/target-section';

import * as styles from './recruiting-page.css';

const RecruitingPage = () => {
  return (
    <main className={styles.page}>
      <RecruitingHeroSection />
      <section className={styles.statusSection}>
        <RecruitmentStatusSection startDate="2026-10-08" endDate="2026-12-10" isActive={true} />
      </section>
      <section className={styles.targetSection}>
        <TargetSection />
      </section>
    </main>
  );
};

export default RecruitingPage;
