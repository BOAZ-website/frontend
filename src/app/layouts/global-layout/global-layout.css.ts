import { style } from '@vanilla-extract/css';

export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const main = style({
  flex: 1,
});
