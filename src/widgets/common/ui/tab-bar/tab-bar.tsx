import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Link, NavLink, useNavigate } from 'react-router';

import { logoutApi } from '@/features/auth/api/logout';
import { useAuth } from '@/features/auth/model/auth-context';
import BOAZLogo from '@/shared/assets/icons/BOAZ_logo.svg?react';
import CloseIcon from '@/shared/assets/icons/ic_close.svg?react';
import GoogleIcon from '@/shared/assets/icons/ic_google.svg?react';
import KakaoIcon from '@/shared/assets/icons/ic_kakao.svg?react';
import MenuIcon from '@/shared/assets/icons/ic_menu.svg?react';
import NaverIcon from '@/shared/assets/icons/ic_naver.svg?react';
import UserIcon from '@/shared/assets/icons/ic_user.svg?react';
import { useUserMe } from '@/shared/queries/use-user-me';
import { ROUTE_PATH } from '@/shared/router/paths';

import * as styles from './tab-bar.css';

type SocialProvider = 'kakao' | 'google' | 'naver';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const APP_URL = import.meta.env.VITE_APP_URL;

const handleSocialLogin = (provider: SocialProvider) => {
  const redirectUri = encodeURIComponent(`${APP_URL.replace(/\/$/, '')}/auth/callback`);
  window.location.href = `${BASE_URL}/oauth2/authorize/${provider}?redirect_uri=${redirectUri}`;
};

const NAV_MENU_LIST = [
  { id: 1, label: '커리큘럼', path: ROUTE_PATH.CURRICULUM },
  { id: 2, label: '리크루팅', path: ROUTE_PATH.RECRUITING },
  { id: 3, label: '아카이브', path: ROUTE_PATH.ARCHIVE },
  { id: 4, label: '자주 묻는 질문', path: ROUTE_PATH.FAQ },
] as const;

const SocialLoginButtons = ({ className }: { className: string }) => (
  <div className={className}>
    <button type="button" aria-label="네이버로 로그인" onClick={() => handleSocialLogin('naver')}>
      <NaverIcon width={35} height={35} />
    </button>
    <button type="button" aria-label="Google로 로그인" onClick={() => handleSocialLogin('google')}>
      <GoogleIcon width={35} height={35} />
    </button>
    <button type="button" aria-label="카카오로 로그인" onClick={() => handleSocialLogin('kakao')}>
      <KakaoIcon width={35} height={35} />
    </button>
  </div>
);

const TabBar = () => {
  const { isLoggedIn, logout, openLogin } = useAuth();
  const { data: userMe } = useUserMe(isLoggedIn);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  const handleLogout = async () => {
    try {
      await logoutApi();
    } finally {
      logout();
      queryClient.removeQueries({ queryKey: ['user', 'me'] });
      closeDrawer();
      navigate(ROUTE_PATH.HOME);
    }
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.leftGroup}>
          <Link to={ROUTE_PATH.HOME} aria-label="홈으로 이동">
            <BOAZLogo width={63} height={20} />
          </Link>
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {NAV_MENU_LIST.map((menu) => (
                <li key={menu.id}>
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      `${styles.navItem}${isActive ? ` ${styles.navItemActive}` : ''}`
                    }
                    aria-label={`${menu.label}으로 이동`}
                  >
                    {menu.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.desktopAuth}>
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
            <button type="button" className={styles.loginButton} onClick={openLogin}>
              로그인
            </button>
          )}
        </div>

        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setIsDrawerOpen(true)}
          aria-label="메뉴 열기"
        >
          <MenuIcon width={24} height={24} />
        </button>
      </header>

      {isDrawerOpen && (
        <div className={styles.drawerOverlay} onClick={closeDrawer} aria-modal="true" role="dialog">
          <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.drawerHeader}>
              {isLoggedIn ? (
                <div className={styles.drawerUserInfo}>
                  <UserIcon width={20} height={20} />
                  <span className={styles.drawerNickname}>{userMe?.nickname}</span>
                </div>
              ) : (
                <SocialLoginButtons className={styles.drawerSocialButtons} />
              )}

              <button
                type="button"
                className={styles.drawerClose}
                onClick={closeDrawer}
                aria-label="메뉴 닫기"
              >
                <CloseIcon width={24} height={24} />
              </button>
            </div>

            <nav>
              <ul className={styles.drawerNavList}>
                {NAV_MENU_LIST.map((menu) => (
                  <li key={menu.id}>
                    <NavLink
                      to={menu.path}
                      className={({ isActive }) =>
                        `${styles.drawerNavItem}${isActive ? ` ${styles.drawerNavItemActive}` : ''}`
                      }
                      onClick={closeDrawer}
                    >
                      {menu.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {isLoggedIn && (
              <button type="button" className={styles.drawerLogoutButton} onClick={handleLogout}>
                로그아웃
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TabBar;
