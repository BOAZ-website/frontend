import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

const DOT_SIZE = '2rem';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
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

export const dotContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
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
