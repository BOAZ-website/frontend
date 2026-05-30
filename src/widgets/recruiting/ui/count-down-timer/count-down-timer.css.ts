import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  gap: '1.5rem',
  color: themeVars.color.primary[100],
  '@media': {
    [media.mobile]: {
      gap: '0.8rem',
    },
  },
});

export const unit = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
  minWidth: '16rem',
  '@media': {
    [media.mobile]: {
      minWidth: '5rem',
    },
  },
});

export const label = style({
  ...typography.body5_rg_16,
  color: themeVars.color.primary[200],
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
    },
  },
});

export const value = style({
  ...typography.display2_bd_72,
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});

export const separator = style({
  ...typography.display2_bd_72,
  alignSelf: 'center',
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});
