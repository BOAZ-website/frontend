import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '31rem',
  height: '40rem',
  borderRadius: '12px',
  position: 'relative',
  cursor: 'pointer',
  padding: '4.2rem 7.2rem 3rem 2.7rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  backgroundColor: themeVars.color.grayscale.white,
  transition: 'background-color 0.3s ease-in-out',

  selectors: {
    '&:hover': {
      backgroundColor: themeVars.color.grayscale[800],
    },
  },
});

export const cardTitle = style({
  ...typography.h2_bd_30,
  marginBottom: '1.2rem',

  color: themeVars.color.grayscale.black,
  transition: 'color 0.3s ease-in-out',

  selectors: {
    [`${cardContainer}:hover &`]: {
      color: themeVars.color.grayscale.white,
    },
  },
});

export const cardDesc = style({
  ...typography.body4_rg_18,

  color: themeVars.color.grayscale.white,
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',

  selectors: {
    [`${cardContainer}:hover &`]: {
      opacity: 1,
    },
  },
});

export const cardIcon = style({
  position: 'absolute',
  right: '-4.6em',
  bottom: '-2.7rem',
  zIndex: themeVars.zIndex.icon,
});

export const cardButtonWrapper = style({
  position: 'absolute',
  bottom: '3rem',
  left: '2.7rem',
  zIndex: themeVars.zIndex.button,
});
