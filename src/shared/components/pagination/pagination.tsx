import IconChevronLeft from '@/shared/assets/icons/ic_chevron_left.svg?react';
import IconChevronRight from '@/shared/assets/icons/ic_chevron_right.svg?react';
import { usePagination } from '@/shared/hooks/use-pagination';

import * as styles from './pagination.css';

const MAX_DOTS = 5;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const { hasPrevious, hasNext, goPrevPage, goNextPage, goToPage } = usePagination({
    currentPage,
    totalPages,
    onPageChange,
  });

  if (totalPages <= 0) {
    return null;
  }

  const half = Math.floor(MAX_DOTS / 2);
  const dotStart = Math.max(1, Math.min(currentPage - half, totalPages - MAX_DOTS + 1));
  const dotEnd = Math.min(totalPages, dotStart + MAX_DOTS - 1);
  const dotPages = Array.from({ length: dotEnd - dotStart + 1 }, (_, i) => dotStart + i);

  return (
    <nav className={styles.wrapper}>
      <button
        type="button"
        onClick={goPrevPage}
        disabled={!hasPrevious}
        className={styles.arrowButton}
        aria-label="이전 페이지"
      >
        <IconChevronLeft width={35} height={35} />
      </button>

      <div className={styles.dotContainer}>
        {dotPages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              type="button"
              onClick={() => goToPage(page)}
              disabled={isActive}
              className={styles.dotButton}
              aria-label={`페이지 ${page}`}
            >
              <span className={styles.dot[isActive ? 'active' : 'default']} />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={goNextPage}
        disabled={!hasNext}
        className={styles.arrowButton}
        aria-label="다음 페이지"
      >
        <IconChevronRight width={35} height={35} />
      </button>
    </nav>
  );
};

export default Pagination;
