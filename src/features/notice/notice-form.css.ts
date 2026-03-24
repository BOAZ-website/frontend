import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '70.6rem',
  height: '6.5rem',
  padding: '2rem 1rem 2rem 3rem',
  backgroundColor: themeVars.color.grayscale.white,
  boxSizing: 'border-box',
  overflow: 'hidden',
  borderRadius: '40px',
});

export const inputField = style({
  flex: 1,
  backgroundColor: 'transparent',
  color: themeVars.color.grayscale.black,
  ...typography.body4_rg_18,

  '::placeholder': {
    color: themeVars.color.grayscale[400],
  },
});
