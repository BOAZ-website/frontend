import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12.5rem',
  width: '100%',
  '@media': {
    [media.mobile]: {
      gap: '4rem',
    },
  },
});

export const dividerRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10.5rem',
  width: '90%',
  '@media': {
    [media.mobile]: {
      gap: '2rem',
      width: '100%',
      padding: '0 2rem',
    },
  },
});

export const dividerText = style({
  ...typography.h2_bd_30,
  '@media': {
    [media.mobile]: {
      ...typography.h5_sm_18,
      textAlign: 'center',
    },
  },
});

const lineBase = {
  flex: 1,
  height: '0.15rem',
} as const;

export const dividerLineLeft = style({
  ...lineBase,
  background: `linear-gradient(to right, transparent 0%, ${themeVars.color.grayscale[100]} 70%, ${themeVars.color.grayscale.white} 100%)`,
});

export const dividerLineRight = style({
  ...lineBase,
  background: `linear-gradient(to left, transparent 0%, ${themeVars.color.grayscale[100]} 70%, ${themeVars.color.grayscale.white} 100%)`,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '8rem',
  '@media': {
    [media.mobile]: {
      gap: '2rem',
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
});
