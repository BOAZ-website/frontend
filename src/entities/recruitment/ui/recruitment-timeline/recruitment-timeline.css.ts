import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';

export const wrapper = style({
  position: 'relative',
  maxWidth: '101.6rem',
  width: '100%',
  margin: '0 auto',

  '::before': {
    content: '""',
    position: 'absolute',
    top: 'calc(var(--date-label-height) + var(--date-label-mb) + var(--dot-half))',
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

  vars: {
    '--date-label-height': '2.1rem',
    '--date-label-mb': '4.3rem',
    '--dot-half': '2rem',
  },
  '@media': {
    [media.mobile]: {
      padding: '0 2rem',
      '::before': {
        display: 'none',
      },
    },
  },
});

export const track = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2.9rem',
  overflowX: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },

  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap: '9rem',
      overflowX: 'visible',
      position: 'relative',

      '::before': {
        content: '""',
        position: 'absolute',
        left: '3rem',
        top: '2.5rem',
        bottom: '2.5rem',
        width: '0.2rem',
        background: `linear-gradient(
          to bottom,
          transparent 0%,
          ${themeVars.color.grayscale[100]} 10%,
          ${themeVars.color.grayscale[100]} 90%,
          transparent 100%
        )`,
        zIndex: 0,
      },
    },
  },
});
