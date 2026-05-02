import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const container = style({
  width: '100%',
  minHeight: '100%',
  backgroundColor: themeVars.color.grayscale.black,
  paddingTop: '16.7rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20rem',
});

export const contentWrapper = style({
  width: '100%',
  maxWidth: '120rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '18.1rem',
});
