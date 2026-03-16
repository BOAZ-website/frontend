import TextFieldWithCounter from '@/shared/components/textfield-with-counter/textfield-with-counter';

const HomePage = () => {
  return (
    // 버튼 컴포넌트 사용 예시
    <>
      <div
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: '100vh',
          padding: '2rem',
          gap: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <TextFieldWithCounter maxLength={10} placeholder="텍스트를 입력하세요" />
      </div>
    </>
  );
};

export default HomePage;
