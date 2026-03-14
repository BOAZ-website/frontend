import ReviewCard from '@/shared/components/reviewCard/review-card';
import * as styles from '@/shared/components/reviewCard/review-card.css';
import { REVIEW_LIST } from '@/shared/components/reviewCard/review-card.constants';

const ReviewListPage = () => {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: 'white' }}>리뷰 페이지 접속 성공!</h1>
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