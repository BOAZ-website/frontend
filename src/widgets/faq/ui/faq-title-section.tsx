import ChatIcon from '@/shared/assets/icons/ic_chat.svg?react';
import Button from '@/shared/components/button/button';

import * as styles from './faq-title-section.css';

export const FAQTitleSection = () => (
  <div className={styles.titleContainer}>
    <h1 className={styles.pageTitle}>FAQ</h1>
    <Button preset="small-round_primary" onClick={() => window.open('https://pf.kakao.com/_xeaCBK')}>
      <div className={styles.chatContent}>
        <ChatIcon className={styles.chatIcon} />
        카카오톡 문의하기
      </div>
    </Button>
  </div>
);
