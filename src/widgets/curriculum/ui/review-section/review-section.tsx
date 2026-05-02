import ReviewCard from '@/widgets/curriculum/ui/review-card-list/review-card';
import type { ReviewResponse } from '@/shared/api/types';
import Pagination from '@/shared/components/pagination/pagination';

import * as styles from './review-section.css';

const REVIEWS_PER_PAGE = 6;

interface ReviewSectionProps {
  reviews: ReviewResponse[];
  currentPage: number;
  onPageChange: (page: number) => void;
}

const TRACK_LABEL: Record<string, string> = {
  ANALYSIS: '분석',
  VISUALIZATION: '시각화',
  ENGINEERING: '엔지니어링',
};

const ReviewSection = ({ reviews, currentPage, onPageChange }: ReviewSectionProps) => {
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const start = (currentPage - 1) * REVIEWS_PER_PAGE;
  const paginated = reviews.slice(start, start + REVIEWS_PER_PAGE);

  return (
    <div className={styles.wrapper}>
      <div className={styles.cardList}>
        {paginated.map((review) => (
          <ReviewCard
            key={review.id}
            title={review.name ?? ''}
            generation={`${review.term ?? ''}기`}
            track={TRACK_LABEL[review.track ?? ''] ?? ''}
            description={review.content ?? ''}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default ReviewSection;
