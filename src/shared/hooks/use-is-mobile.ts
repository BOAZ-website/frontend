import { useEffect, useState } from 'react';

import { breakpoints } from '@/shared/styles/breakpoints';

const MOBILE_QUERY = `(max-width: ${breakpoints.mobile})`;

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return isMobile;
};

export default useIsMobile;
