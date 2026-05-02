import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const sectionTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h3_sb_30,
});

export const row = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const rowLabel = style({
  color: themeVars.color.primary[100],
  ...typography.h4_bd_24,
});

export const radioGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: '0.8rem',
});
