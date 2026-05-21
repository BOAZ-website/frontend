import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  flex: 1,
  padding: '2.5rem 1.2rem',
});

export const input = style({
  flex: 1,
  color: themeVars.color.grayscale.white,
  ...typography.body1_rg_24,

  '::placeholder': {
    color: themeVars.color.grayscale[400],
  },
});
