import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '8rem',
  '@media': {
    [media.mobile]: {
      gap: '6rem',
    },
  },
});
