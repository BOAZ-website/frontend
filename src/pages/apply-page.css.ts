import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '120rem',
  //margin: '0 auto',
  marginLeft: '20rem',
  marginRight: '20rem',
  padding: '0 2rem',
  minHeight: '100vh',
  display: 'flex',
  alignContent: 'center',
  flexDirection: 'column',
});

export const content = style({
  marginTop: '4rem',
  paddingBottom: '10rem',
});
