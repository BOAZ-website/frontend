import { useNavigate } from 'react-router';

import BOAZLogo from '@/shared/assets/icon/BOAZ_logo.svg?react';
import { ROUTE_PATH } from '@/shared/router/path';

import * as styles from './tab-bar.css';

interface TabBarProps {
  handleApplyClick: () => void;
}

const TabBar = ({ handleApplyClick }: TabBarProps) => {
  const navigate = useNavigate();

  const NAV_MENU_LIST = [
    { id: 1, label: '커리큘럼', path: ROUTE_PATH.CURRICULUM },
    { id: 2, label: '리크루팅', path: ROUTE_PATH.RECRUITING },
    { id: 3, label: '아카이브', path: ROUTE_PATH.ARCHIVE },
    { id: 4, label: '자주 묻는 질문', path: ROUTE_PATH.FAQ },
  ];

  return (
    <nav className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftGroup}>
          {/* 로고 클릭 시 홈으로 이동 */}
          <div className={styles.logoSection} onClick={() => navigate(ROUTE_PATH.HOME)}>
            <BOAZLogo />
          </div>

          <ul className={styles.navList}>
            {NAV_MENU_LIST.map((menu) => (
              <li
                key={menu.id}
                className={styles.navItem}
                onClick={() => navigate(menu.path)} // 5. 클릭 시 해당 경로로 이동
              >
                {menu.label}
              </li>
            ))}
          </ul>
        </div>

        {/* 5. 지원하기 */}
        <button className={styles.applyButton} onClick={handleApplyClick}>
          지원하기
        </button>
      </div>
    </nav>
  );
};

export default TabBar;
