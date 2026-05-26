import ChatIcon from '@/shared/assets/icons/ic_kakao_button_logo.svg?react';
import Button from '@/shared/components/button/button';

import * as styles from './faq-title-section.css';

const FAQTitleSection = () => (
  <div className={styles.titleContainer}>
    <h1 className={styles.pageTitle}>FAQ</h1>
    <Button
      preset="small-round_primary"
      onClick={() => window.open('https://pf.kakao.com/_xeaCBK')}
    >
      <div className={styles.chatContent}>
        <ChatIcon width={20} height={20} />
        카카오톡 문의하기
      </div>
    </Button>
  </div>
);

export default FAQTitleSection;
