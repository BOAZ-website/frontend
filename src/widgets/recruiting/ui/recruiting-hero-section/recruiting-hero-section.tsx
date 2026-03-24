import * as styles from './recruiting-hero-section.css';

const RecruitingHeroSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.subTitle}>국내 최초 빅데이터 동아리</p>
      <h1 className={styles.title}>
        <em className={styles.emphasis}>B</em>igdata is <em className={styles.emphasis}>O</em>ur{' '}
        <em className={styles.emphasis}>A</em> to <em className={styles.emphasis}>Z</em>
      </h1>
      <p className={styles.description}>와 함께할 여러분을 기다립니다</p>
    </div>
  );
};

export default RecruitingHeroSection;
