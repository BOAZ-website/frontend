import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column',
});

export const title = style({
  ...typography.h2_bd_30,
  color: themeVars.color.grayscale.white,
});

export const description = style({
  ...typography.text_rg_14,
  color: themeVars.color.grayscale[400],
});
