import ChatIcon from '@/shared/assets/icon/ic_chat.svg?react';
import SearchIcon from '@/shared/assets/icon/ic_search.svg?react';
import Button from '@/shared/components/button/button';
const HomePage = () => {
  return (
    // 버튼 컴포넌트 사용 예시
    <div>
      <Button preset="large-round_primary">
        <ChatIcon />
        카카오톡 문의하기
      </Button>
      <Button preset="small-round_primary">지원하기</Button>
      <Button preset="small-round_dark">지원하기</Button>
      <div style={{ backgroundColor: 'black' }}>
        <Button preset="mini_outlined">
          <SearchIcon />
          Tag
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
