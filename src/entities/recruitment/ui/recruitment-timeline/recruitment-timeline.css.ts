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
    '--date-label-height': '2.4rem', // body1_rg_24 line-height
    '--date-label-mb': '4.3rem', // dateLabel marginBottom
    '--dot-half': '2rem', // dot height(4rem) / 2
  },
  '@media': {
    [media.mobile]: {
      padding: '0 2rem',
      vars: {
        '--date-label-height': '1rem',
        '--date-label-mb': '2rem',
        '--dot-half': '0.8rem',
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
      gap: '1.2rem',
    },
  },
});
