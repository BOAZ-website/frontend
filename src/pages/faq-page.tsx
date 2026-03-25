import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const container = style({
  width: '100%',
  minHeight: '100%',
  backgroundColor: themeVars.color.grayscale.black,
  paddingTop: '13.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const contentWrapper = style({
  width: '100%',
  maxWidth: '120rem',
  display: 'flex',
  flexDirection: 'column',
});