import { useState } from 'react';

import Pagination from '@/shared/components/pagination/pagination';

const MOCK_TOTAL_PAGES = 10;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // TODO: API 연동 후 삭제
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < MOCK_TOTAL_PAGES;

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={MOCK_TOTAL_PAGES}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HomePage;
