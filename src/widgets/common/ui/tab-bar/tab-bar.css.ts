import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '1rem 4.3rem 1rem 6.3rem',
  color: themeVars.color.grayscale.white,
  backgroundColor: 'black',
  whiteSpace: 'nowrap',
});

export const leftGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10rem',
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
    ...typography.body3_bd_18,
  },
});

export const loginLink = style({
  color: themeVars.color.grayscale.white,
  ...typography.body3_bd_18,
});
