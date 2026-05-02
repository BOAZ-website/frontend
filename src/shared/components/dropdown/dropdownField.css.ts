import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const container = style({
  position: 'relative',
  width: '100%',
});

export const overlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,

  selectors: {
    [`& button`]: {
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      border: 'none',
      color: 'transparent',
      cursor: 'pointer',
      padding: 0,
      textAlign: 'left',
    },
    [`& div[class*="menuContainer"]`]: {
      top: '100%',
      marginTop: '0.4rem',
      backgroundColor: themeVars.color.grayscale[100],
    },
  },
});
