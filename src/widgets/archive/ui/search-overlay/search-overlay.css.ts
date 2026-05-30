import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  flex: 1,
  padding: '2.5rem 1.2rem',
  '@media': {
    [media.mobile]: {
      padding: '1.2rem 0.8rem',
    },
  },
});

export const input = style({
  flex: 1,
  color: themeVars.color.grayscale.white,
  ...typography.body1_rg_24,

  '::placeholder': {
    color: themeVars.color.grayscale[400],
  },

  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
    },
  },
});

export const icon = style({
  flexShrink: 0,
  width: '2.8rem',
  height: '2.8rem',
});
