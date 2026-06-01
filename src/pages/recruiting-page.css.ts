import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '13.2rem 0 20rem',
  '@media': {
    [media.mobile]: {
      padding: '6rem 0 10rem',
    },
  },
});

export const statusSection = style({
  marginTop: '17rem',
  '@media': {
    [media.mobile]: {
      marginTop: '6rem',
    },
  },
});

export const bottomSection = style({
  marginTop: '25rem',
  width: '100%',
  '@media': {
    [media.mobile]: {
      marginTop: '10rem',
    },
  },
});

export const targetSection = style({
  marginTop: '12.5rem',
  '@media': {
    [media.mobile]: {
      marginTop: '10rem',
      width: '100%',
    },
  },
});

export const valueSection = style({
  marginTop: '25rem',
  '@media': {
    [media.mobile]: {
      marginTop: '10rem',
      width: '100%',
    },
  },
});

export const applySection = style({
  marginTop: '25rem',
  flexDirection: 'row',
  '@media': {
    [media.mobile]: {
      marginTop: '10rem',
      width: '100%',
    },
  },
});
