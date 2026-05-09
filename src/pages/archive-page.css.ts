import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 33.3rem)',
  gap: '2.4rem',
  justifyContent: 'center',
  padding: '6rem 2rem',
  width: '100%',
});
