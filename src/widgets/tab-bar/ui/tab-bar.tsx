import * as styles from './tab-bar.css';
import BOAZLogo from '@/shared/assets/icon/BOAZ_logo.svg?react';

interface TabBarProps {
  handleApplyClick: () => void;
}

const TabBar = ({ handleApplyClick }: TabBarProps) => {
  const NAV_MENU_LIST = [
    { id: 1, label: '커리큘럼' },
    { id: 2, label: '리크루팅' },
    { id: 3, label: '아카이브' },
    { id: 4, label: '자주 묻는 질문' },
  ];

  return (
    <>
      {/* 1. styles.wrapper 사용 */}
      <nav className={styles.wrapper}>
        {/* 2. 내부 콘텐츠를 중앙으로 모아주는 container 추가 */}
        <div className={styles.container}>

          <div className={styles.leftGroup}>
            {/* 3. 로고 영역에 styles.logoSection 적용 */}
            <div className={styles.logoSection}>
            <BOAZLogo/>
          </div>

          {/* 4. 리스트 영역 */}
          <ul className={styles.navList}>
            {NAV_MENU_LIST.map((menu) => (
              <li key={menu.id} className={styles.navItem}>
                {menu.label}
              </li>
            ))}
          </ul>
          </div>

          {/* 5. 지원하기 */}
          <button 
            className={styles.applyButton} 
            onClick={handleApplyClick}
          >
            지원하기
          </button>
        </div>
      </nav>
    </>
  );
};

export default TabBar;