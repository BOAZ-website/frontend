import { useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router';

import { logoutApi } from '@/features/auth/api/logout';
import { useAuth } from '@/features/auth/model/auth-context';
import BOAZLogo from '@/shared/assets/icons/BOAZ_logo.svg?react';
import UserIcon from '@/shared/assets/icons/ic_user.svg?react';
import { useUserMe } from '@/shared/queries/use-user-me';
import { ROUTE_PATH } from '@/shared/router/paths';

import * as styles from './tab-bar.css';

const NAV_MENU_LIST_BEFORE_LOGIN = [
  { id: 1, label: '커리큘럼', path: ROUTE_PATH.CURRICULUM },
  { id: 2, label: '리크루팅', path: ROUTE_PATH.RECRUITING },
  { id: 3, label: '아카이브', path: ROUTE_PATH.ARCHIVE },
  { id: 4, label: '자주 묻는 질문', path: ROUTE_PATH.FAQ },
] as const;

const TabBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const { data: userMe } = useUserMe(isLoggedIn);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    try {
      await logoutApi();
    } finally {
      logout();
      queryClient.removeQueries({ queryKey: ['user', 'me'] });
      navigate(ROUTE_PATH.HOME);
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.leftGroup}>
        <Link to={ROUTE_PATH.HOME} aria-label="홈으로 이동">
          <BOAZLogo width={63} height={20} />
        </Link>
        <nav>
          <ul className={styles.navList}>
            {NAV_MENU_LIST_BEFORE_LOGIN.map((menu) => (
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

      {isLoggedIn ? (
        <div className={styles.userGroup}>
          <div className={styles.userInfo}>
            <UserIcon width={20} height={20} />
            <span className={styles.nickname}>{userMe?.nickname}</span>
          </div>
          <button type="button" className={styles.logoutButton} onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      ) : (
        <Link to={ROUTE_PATH.LOGIN} className={styles.loginLink} aria-label="로그인">
          로그인
        </Link>
      )}
    </header>
  );
};

export default TabBar;
