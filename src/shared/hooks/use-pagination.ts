import { useCallback } from 'react';

interface UsePaginationArgs {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

interface UsePaginationReturn {
  hasPrevious: boolean;
  hasNext: boolean;
  goToPage: (page: number) => void;
  goPrevPage: () => void;
  goNextPage: () => void;
}

export const usePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: UsePaginationArgs): UsePaginationReturn => {
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const goToPage = useCallback(
    (page: number) => {
      if (page < 1 || page > totalPages || page === currentPage) {
        return;
      }
      onPageChange(page);
    },
    [currentPage, totalPages, onPageChange]
  );

  const goPrevPage = () => goToPage(currentPage - 1);
  const goNextPage = () => goToPage(currentPage + 1);

  return { hasPrevious, hasNext, goToPage, goPrevPage, goNextPage };
};
