import { Link } from 'react-router';

import RightArrowIcon from '@/shared/assets/icons/ic_arrow_right_black.svg?react';
import Button from '@/shared/components/button/button';

import * as styles from './conference-section.css';
const ConferenceSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail} />
      <div className={styles.content}>
        <h2 className={styles.title}>기업 컨택 및 컨퍼런스 진행</h2>
        <p className={styles.description}>
          {`BOAZ는 뛰어난 인재들이 모여 여러 기구\n기업 컨택을 진행합니다.\n현 산업체 고수들과 함께 진행됩니다.\n그리고 최종적으로 컨퍼런스에서 그 성과를 발표해요.`}
        </p>
        <Link to="/">
          <Button preset="medium_white" hasIcon>
            자세히 보기
            <RightArrowIcon width={24} height={24} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ConferenceSection;
