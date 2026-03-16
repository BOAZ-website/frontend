import ArrowRightIcon from '@/shared/assets/icon/ic_arrow_right_black.svg?react';
import ChatIcon from '@/shared/assets/icon/ic_chat.svg?react';
import SearchIcon from '@/shared/assets/icon/ic_search.svg?react';
import Button from '@/shared/components/button/button';
import Footer from '@/shared/components/footer/footer';
import FormHeader from '@/shared/components/form-header/form-header';
const HomePage = () => {
  return (
    // 버튼 컴포넌트 사용 예시
    <>
      <div
        style={{
          backgroundColor: 'black',
          width: '100%',
          boxSizing: 'border-box',
          gap: '1rem',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <FormHeader
          title="연락처"
          description="합격 결과가 전달될 예정이므로 정확하게 작성해주세요"
        />
        <FormHeader title="개인정보" />
        <Button preset="large-round_primary">
          <ChatIcon />
          카카오톡 문의하기
        </Button>
        <Footer />

        <Button preset="medium-round_primary">사전 알림 신청</Button>
        <Button preset="small-round_primary">지원하기</Button>
        <Button preset="small-round_glass">지원하기</Button>
        <Button preset="mini_outlined">
          <SearchIcon />
          Tag
        </Button>
        <Button preset="large_white">신입기수 홍보 책자</Button>
        <Button preset="medium_primary">제출하기</Button>
        <Button preset="medium_white" hasIcon>
          자세히 보기
          <ArrowRightIcon />
        </Button>
      </div>
    </>
  );
};

export default HomePage;
