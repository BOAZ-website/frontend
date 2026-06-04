import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.scrollbarWidth = 'none';
    return () => {
      document.body.style.overflow = '';
      document.body.style.scrollbarWidth = '';
    };
  }, []);

  return (
    <iframe
      src="/landing.html"
      style={{
        width: '100%',
        height: 'calc(100vh - 60px)',
        border: 'none',
        display: 'block',
        overflow: 'auto',
      }}
    />
  );
};

export default HomePage;
