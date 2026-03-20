import Accordion from '@/shared/components/accordion/accordion';

const HomePage = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'black' }}>
      <Accordion trigger="제목입니다.">
        <p>내용입니다.</p>
      </Accordion>
      <Accordion trigger="제목입니다.">
        <p>내용입니다.</p>
      </Accordion>
      <Accordion trigger="제목입니다.">
        <p>내용입니다.</p>
      </Accordion>
    </div>
  );
};

export default HomePage;
