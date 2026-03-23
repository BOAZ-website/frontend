import { Link } from 'react-router';

import BOAZLogo from '@/shared/assets/icon/BOAZ_logo.svg?react';
import Button from '@/shared/components/button/button';
import { EXTERNAL_LINKS } from '@/shared/configs/external-links';
import { ROUTE_PATH } from '@/shared/router/paths';

import * as styles from './tab-bar.css';

const NAV_MENU_LIST = [
  { id: 1, label: '커리큘럼', path: ROUTE_PATH.CURRICULUM },
  { id: 2, label: '리크루팅', path: ROUTE_PATH.RECRUITING },
  { id: 3, label: '아카이브', path: ROUTE_PATH.ARCHIVE },
  { id: 4, label: '자주 묻는 질문', path: ROUTE_PATH.FAQ },
] as const;

const TabBar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.leftGroup}>
        <Link to={ROUTE_PATH.HOME} aria-label="홈으로 이동">
          <BOAZLogo width={63} height={20} />
        </Link>
        <nav>
          <ul className={styles.navList}>
            {NAV_MENU_LIST.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className={styles.navItem}
                  aria-label={`${menu.label}으로 이동`}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <a
        href={EXTERNAL_LINKS.APPLY_FORM}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="지원하기"
      >
        <Button preset="small-round_glass">지원하기</Button>
      </a>
    </header>
  );
};

export default TabBar;
