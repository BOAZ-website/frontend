import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

const HomePage = () => {
  return (
    <div style={{ width: '300px' }}>
      <TextFieldWithCounter maxLength={1} placeholder="Enter text..." />
    </div>
  );
};

export default HomePage;
