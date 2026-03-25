import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '120',
  width: '100%',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const sectionTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h2_bd_30,
});

export const sectionDescription = style({
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
  marginTop: '-1.2rem',
});

export const row = style({
  display: 'flex',
  gap: '1.6rem',
  width: '100%',
});
