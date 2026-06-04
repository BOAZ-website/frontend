const HomePage = () => {
  return (
    <>
      <iframe
        src="/landing.html"
        style={{
          width: '100%',
          height: 'calc(100vh - 50px)',
          border: 'none',
          display: 'block',
          overflow: 'auto',
        }}
      />
    </>
  );
};

export default HomePage;
