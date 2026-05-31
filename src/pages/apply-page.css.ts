import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

export const container = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 2rem',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const content = style({
  width: '100%',
  marginTop: '4rem',
  paddingBottom: '10rem',
});

export const containerAgreement = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 2rem',
  minHeight: '100vh',
  paddingTop: '16rem',
  paddingBottom: '18.8rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  '@media': {
    [media.mobile]: {
      paddingTop: '8rem',
      paddingBottom: '8rem',
    },
  },
});
