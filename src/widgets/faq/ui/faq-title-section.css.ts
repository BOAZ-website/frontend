import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '6rem',
});

export const pageTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h1_bd_40,
});

export const chatContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const chatIcon = style({
  width: '2rem',
  height: '2rem',
});
