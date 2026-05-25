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
  position: 'relative',
});

export const titleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.h1_bd_40,
});

export const subtitle = style({
  ...typography.body4_rg_18,
  color: themeVars.color.grayscale.white,
});
