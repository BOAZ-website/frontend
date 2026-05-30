import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  width: '100%',
  '@media': {
    [media.mobile]: {
      gap: '3rem',
    },
  },
});

export const cardList = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '4rem',
  '@media': {
    [media.mobile]: {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
});
