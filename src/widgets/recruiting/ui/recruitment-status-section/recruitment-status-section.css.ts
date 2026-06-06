import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8rem',
  '@media': {
    [media.mobile]: {
      gap: '4rem',
    },
  },
});

export const recruitDate = style({
  ...typography.display2_bd_72,
  fontFamily: themeVars.fontFamily.paperlogy,
  '@media': {
    [media.mobile]: {
      ...typography.h1_bd_36,
    },
  },
});
