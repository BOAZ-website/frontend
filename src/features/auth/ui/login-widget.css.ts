import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  gap: '2.4rem',
  padding: '0 2rem',
});

export const title = style({
  ...typography.h4_bd_24,
  color: themeVars.color.grayscale.white,
  marginBottom: '1.6rem',
});

export const errorMessage = style({
  ...typography.body3_bd_18,
  color: themeVars.color.error.red_100,
  marginBottom: '0.8rem',
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  width: '100%',
  maxWidth: '40rem',
});

export const socialButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
  padding: '1.6rem',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  ...typography.body2_bd_20,
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 0.85,
  },
});

export const kakaoButton = style([
  socialButton,
  {
    backgroundColor: '#FEE500',
    color: themeVars.color.grayscale.black,
  },
]);

export const googleButton = style([
  socialButton,
  {
    backgroundColor: themeVars.color.grayscale.white,
    color: themeVars.color.grayscale.black,
  },
]);

export const naverButton = style([
  socialButton,
  {
    backgroundColor: '#03C75A',
    color: themeVars.color.grayscale.white,
  },
]);
