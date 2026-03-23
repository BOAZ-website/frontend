import { useState } from 'react';

import Pagination from '@/shared/components/pagination/pagination';

const MOCK_TOTAL_PAGES = 10;

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={MOCK_TOTAL_PAGES}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default HomePage;
