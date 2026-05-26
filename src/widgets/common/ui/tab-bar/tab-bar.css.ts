import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

const MOBILE = 'screen and (max-width: 768px)';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '2.2rem 4.3rem 2rem 6.3rem',
  color: themeVars.color.grayscale.white,
  backgroundColor: 'black',
  whiteSpace: 'nowrap',
  '@media': {
    [MOBILE]: {
      padding: '1.6rem 2rem',
    },
  },
});

export const leftGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10rem',
});

export const desktopNav = style({
  '@media': {
    [MOBILE]: {
      display: 'none',
    },
  },
});

export const desktopAuth = style({
  '@media': {
    [MOBILE]: {
      display: 'none',
    },
  },
});

export const navList = style({
  display: 'flex',
  gap: '10rem',
});

export const navItem = style({
  display: 'block',
  cursor: 'pointer',
  ...typography.body4_rg_18,
  ':hover': {
    ...typography.body3_bd_18,
  },
});

export const userGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

export const userInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  color: themeVars.color.grayscale.white,
});

export const nickname = style({
  ...typography.body3_bd_18,
});

export const logoutButton = style({
  color: themeVars.color.grayscale.white,
  ...typography.body5_rg_16,
  ':hover': {
    color: themeVars.color.grayscale[300],
  },
});

export const loginButton = style({
  color: themeVars.color.grayscale.white,
  ...typography.body3_bd_18,
});

// Mobile hamburger
export const hamburger = style({
  display: 'none',
  '@media': {
    [MOBILE]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
  },
});

// Mobile drawer
export const drawerOverlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 200,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const drawer = style({
  width: '50%',
  backgroundColor: themeVars.color.grayscale[900],
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 2.4rem',
  overflowY: 'auto',
});

export const drawerHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '3.4rem',
});

export const drawerClose = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  cursor: 'pointer',
});

export const drawerLoginButton = style({
  color: themeVars.color.grayscale.white,
  ...typography.body3_bd_18,
  cursor: 'pointer',
});

export const drawerUserInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: themeVars.color.grayscale.white,
});

export const drawerNickname = style({
  ...typography.body3_bd_18,
});

export const drawerSocialButtons = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
});

export const drawerNavList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

export const drawerNavItem = style({
  display: 'block',
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
  cursor: 'pointer',
  ':hover': {
    ...typography.body3_bd_18,
  },
});

export const drawerLogoutButton = style({
  marginTop: 'auto',
  paddingTop: '3.2rem',
  color: themeVars.color.grayscale[300],
  ...typography.body4_rg_18,
  cursor: 'pointer',
  textAlign: 'left',
});
