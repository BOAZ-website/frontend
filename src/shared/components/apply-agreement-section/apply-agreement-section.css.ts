import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const content = style({
  ...typography.body4_rg_18,
  lineHeight: '1.8',
});

export const title = style({
  ...typography.h4_bd_24,
  color: themeVars.color.grayscale.white,
  borderLeft: `4px solid ${themeVars.color.primary[200]}`,
  paddingLeft: '1.6rem',
});

export const link = style({
  color: themeVars.color.primary[100],
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
});

export const description = style({
  color: themeVars.color.grayscale[100],
  whiteSpace: 'pre-wrap',
});
