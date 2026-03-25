import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12.5rem',
  width: '100%',
});

export const divider = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.8rem',
  width: '100%',
});

export const lineLeft = style({
  flex: 1,
  height: '0.3rem',
  background: `linear-gradient(
    to left,
    ${themeVars.color.grayscale.white} 0%,
    ${themeVars.color.grayscale[100]} 40%,
    transparent 100%
  )`,
});

export const lineRight = style({
  flex: 1,
  height: '0.3rem',
  background: `linear-gradient(
    to right,
    ${themeVars.color.grayscale.white} 0%,
    ${themeVars.color.grayscale[100]} 40%,
    transparent 100%
  )`,
});

export const dividerText = style({
  whiteSpace: 'nowrap',
  flexShrink: 0,
  ...typography.h2_bd_30,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '8rem',
});
