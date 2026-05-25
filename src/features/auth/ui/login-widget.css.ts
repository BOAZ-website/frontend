import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: themeVars.color.grayscale.black,
});

export const titleSection = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: '8rem',
  paddingBottom: '4rem',
});

export const title = style({
  ...typography.h1_bd_40,
  color: themeVars.color.grayscale.white,
});

export const buttonSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '10rem',
  gap: '2rem',
});

export const errorMessage = style({
  ...typography.body3_bd_18,
  color: themeVars.color.error.red_100,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '4rem',
});

const circleButton = style({
  width: '6rem',
  height: '6rem',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 0.85,
  },
});

export const naverButton = style([
  circleButton,
  {
    backgroundColor: '#03C75A',
  },
]);

export const googleButton = style([
  circleButton,
  {
    backgroundColor: themeVars.color.grayscale.white,
  },
]);

export const kakaoButton = style([
  circleButton,
  {
    backgroundColor: '#FEE500',
  },
]);
