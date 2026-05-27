import { style, styleVariants } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';

const DOT_SIZE = '2rem';
const DOT_SIZE_MOBILE = '1.2rem';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
  '@media': {
    [media.mobile]: {
      gap: '2rem',
    },
  },
});

export const arrowButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  ':disabled': {
    cursor: 'default',
    opacity: 0.2,
  },
});

export const arrowIcon = style({
  width: '3.5rem',
  height: '3.5rem',
  '@media': {
    [media.mobile]: {
      width: '1.6rem',
      height: '1.6rem',
    },
  },
});

export const dotContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  '@media': {
    [media.mobile]: {
      gap: '1rem',
    },
  },
});

export const dotButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const dotBase = style({
  width: DOT_SIZE,
  height: DOT_SIZE,
  borderRadius: '50%',
  flexShrink: 0,
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  '@media': {
    [media.mobile]: {
      width: DOT_SIZE_MOBILE,
      height: DOT_SIZE_MOBILE,
    },
  },
});

export const dot = styleVariants({
  default: [
    dotBase,
    {
      border: `1px solid ${themeVars.color.grayscale.white}`,
      backgroundColor: 'transparent',
    },
  ],
  active: [
    dotBase,
    {
      border: `1px solid ${themeVars.color.grayscale.white}`,
      backgroundColor: themeVars.color.grayscale.white,
    },
  ],
});
