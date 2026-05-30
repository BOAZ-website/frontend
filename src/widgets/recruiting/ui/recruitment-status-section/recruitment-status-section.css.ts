import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12.5rem',
  '@media': {
    [media.mobile]: {
      gap: '4rem',
    },
  },
});

export const recruitDate = style({
  ...typography.display2_bd_72,
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});
