import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '70.6rem',
  height: '6.5rem',
  padding: '2rem 1rem 2rem 5.3rem', // 위 오 아래 왼 간격
  backgroundColor: themeVars.color.grayscale.white,
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
