import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  gap: '7.2rem',
  alignItems: 'center',
});

export const thumbnail = style({
  width: '47.3rem',
  height: '26.6rem',
  objectFit: 'cover',
  flexShrink: 0,
  backgroundColor: themeVars.color.grayscale.white,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
});

export const title = style({
  ...typography.h4_bd_24,
  color: themeVars.color.grayscale.white,
});

export const description = style({
  ...typography.body4_rg_18,
  lineHeight: '3rem',
  color: themeVars.color.grayscale.white,
  whiteSpace: 'pre-line',
});
