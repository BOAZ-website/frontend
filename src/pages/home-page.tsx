import FormHeader from '@/shared/components/form-header/form-header';

const HomePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
      }}
    >
      <FormHeader
        title="Welcome to the Home Page"
        description="This is the main landing page of our application."
      />
    </div>
  );
};

export default HomePage;
