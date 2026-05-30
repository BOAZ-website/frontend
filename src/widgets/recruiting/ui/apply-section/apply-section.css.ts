import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

export const trackList = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '5.5rem',
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap: '2rem',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
  },
});
