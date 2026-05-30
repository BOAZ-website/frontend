import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

export const cardList = style({
  display: 'flex',
  gap: '7rem',
  justifyContent: 'center',
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap: '4rem',
      alignItems: 'center',
      width: '100%',
      padding: '0 2rem',
    },
  },
});
