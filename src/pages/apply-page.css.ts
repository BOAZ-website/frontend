import { style } from '@vanilla-extract/css';

export const container = style({
  //maxWidth: '120rem',
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
