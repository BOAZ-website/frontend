import ReviewCard from '@/widgets/curriculum/ui/review-card-list/review-card';
import type { ReviewResponse } from '@/shared/api/types';
import Pagination from '@/shared/components/pagination/pagination';
import useIsMobile from '@/shared/hooks/use-is-mobile';

import * as styles from './review-section.css';

const REVIEWS_PER_PAGE_DESKTOP = 6;
const REVIEWS_PER_PAGE_MOBILE = 4;

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
  const isMobile = useIsMobile();
  const reviewsPerPage = isMobile ? REVIEWS_PER_PAGE_MOBILE : REVIEWS_PER_PAGE_DESKTOP;
  const totalPages = Math.max(1, Math.ceil(reviews.length / reviewsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  if (safePage !== currentPage) {
    onPageChange(safePage);
  }

  const start = (safePage - 1) * reviewsPerPage;
  const paginated = reviews.slice(start, start + reviewsPerPage);

  return (
    <div className={styles.wrapper}>
      {reviews.length > 0 && (
        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          maxDots={isMobile ? 7 : 5}
        />
      )}
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
    </div>
  );
};

export default ReviewSection;
