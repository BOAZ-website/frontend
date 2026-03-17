import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '70.6rem',
  height: '6.5rem',
  padding: '0.5rem 1.0rem 0.4rem 3.91rem', // 왼,위,아래,버튼 간격
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '4rem',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const inputField = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  padding: 0,
  margin: 0,
  backgroundColor: 'transparent',
  color: themeVars.color.grayscale.black,
  ...typography.body4_rg_18,

  '::placeholder': {
    color: themeVars.color.grayscale[400],
  },
});

export const submitButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  height: '5.6rem',
  width: '18rem',
  backgroundColor: themeVars.color.primary[100],
  color: themeVars.color.grayscale.white,
  borderRadius: '4rem',
  border: 'none',
  cursor: 'pointer',
  ...typography.body2_bd_20,
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease',

  selectors: {
    '&:hover': {
      filter: 'brightness(1.1)',
      transform: 'translateY(-1px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
});
