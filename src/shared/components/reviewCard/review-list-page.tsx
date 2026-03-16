import ReviewCard from '@/shared/components/reviewCard/review-card';
import { REVIEW_LIST } from '@/shared/components/reviewCard/review-card.constants';

import * as styles from '@/shared/components/reviewCard/review-card.css';
import { themeVars } from '@/shared/styles/theme.css';

const ReviewListPage = () => {
  return (
    <main style={{ backgroundColor: themeVars.color.grayscale.white, minHeight: '100vh' }}>
      <h1 style={{ color: themeVars.color.grayscale.white }}>리뷰 페이지 접속 성공!</h1>
      <div className={styles.cardGrid}>
        {REVIEW_LIST.map((review) => (
          <ReviewCard
            key={review.id} // 고유 id 사용
            title={review.title}
            generation={review.generation}
            track={review.track}
            description={review.description}
          />
        ))}
      </div>
    </main>
  );
};

export default ReviewListPage;
