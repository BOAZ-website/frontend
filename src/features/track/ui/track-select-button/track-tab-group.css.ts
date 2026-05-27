import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

export const container = style({
  display: 'flex',
  gap: '5rem',
  '@media': {
    [media.mobile]: {
      gap: '2.2rem',
      width: '100%',
    },
  },
});
