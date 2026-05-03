import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  width: '100%',
  marginTop: '4rem',
  marginBottom: '6rem',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.h1_bd_40,
});
