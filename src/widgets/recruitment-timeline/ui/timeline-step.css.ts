import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const nodeWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  zIndex: 1,
});

export const dateLabel = style({
  ...typography.body1_rg_24,
  color: themeVars.color.grayscale.white,
  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '4.3rem',
});

export const timelineDot = style({
  width: '4rem',
  height: '4rem',
  boxSizing: 'content-box',
  borderRadius: '50%',
  backgroundColor: themeVars.color.grayscale[100],
  outline: `10px solid ${themeVars.color.grayscale.black}`,
  marginBottom: '5.2rem',
  zIndex: 2,
});

export const stepLabel = style({
  background: themeVars.color.grayscale[800],
  color: themeVars.color.grayscale.white,
  borderRadius: '12px',
  maxWidth: '18rem',
  width: '100%',
  padding: '1.75rem 0',
  ...typography.body1_rg_24,
  whiteSpace: 'nowrap',
  textAlign: 'center',
});
