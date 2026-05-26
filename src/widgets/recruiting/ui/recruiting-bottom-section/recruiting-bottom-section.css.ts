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

export const dividerText = style({
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
  width: '100%',
  ...typography.h2_bd_30,

  '::before': {
    content: '""',
    flex: 1,
    height: '0.15rem',
    background: `linear-gradient(to right, transparent 0%, ${themeVars.color.grayscale[100]} 70%, ${themeVars.color.grayscale.white} 100%)`,
  },
  '::after': {
    content: '""',
    flex: 1,
    height: '0.15rem',
    background: `linear-gradient(to left, transparent 0%, ${themeVars.color.grayscale[100]} 70%, ${themeVars.color.grayscale.white} 100%)`,
  },
});

export const buttonGroup = style({
  display: 'flex',
  gap: '8rem',
});
