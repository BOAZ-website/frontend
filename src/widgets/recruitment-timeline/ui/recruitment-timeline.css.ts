import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const wrapper = style({
  position: 'relative',
  maxWidth: '101.6rem',
  width: '100%',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 'calc(2.4rem + 4.3rem + 2rem + 1rem)',
    left: 0,
    right: 0,
    height: '0.2rem',
    background: `linear-gradient(
    to right,
    transparent 0%,
    ${themeVars.color.grayscale[100]} 45%,
    ${themeVars.color.grayscale.white} 50%,
    ${themeVars.color.grayscale[100]} 65%,
    transparent 100%
  )`,
    zIndex: 1,
  },
});

export const track = style({
  display: 'flex',
  gap: '2.9rem',
  position: 'relative',
  overflowX: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
