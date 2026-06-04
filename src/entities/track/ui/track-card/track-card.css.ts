import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '31rem',
  height: '40rem',
  borderRadius: '12px',
  position: 'relative',
  cursor: 'pointer',
  padding: '4.2rem 2.7rem 3rem 2.7rem',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  whiteSpace: 'pre-wrap',
  color: themeVars.color.grayscale.white,
  backgroundColor: themeVars.color.grayscale[800],
  transition: 'background-color 0.3s ease-in-out',

  selectors: {
    '&:hover': {
      backgroundColor: themeVars.color.grayscale[800],
    },
  },

  '@media': {
    [media.mobile]: {
      width: '28rem',
      padding: '2.8rem 3.2rem 0 2rem',
    },
  },
});

export const cardTitle = style({
  ...typography.h2_bd_30,
  marginBottom: '1.2rem',

  transition: 'color 0.3s ease-in-out',

  selectors: {
    [`${cardContainer}:hover &`]: {
      color: themeVars.color.grayscale.white,
    },
  },

  '@media': {
    [media.mobile]: {
      ...typography.body2_bd_20,
      marginBottom: '2rem',
    },
  },
});

export const cardDesc = style({
  ...typography.body4_rg_18,
  lineHeight: '1.2',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',

  selectors: {
    [`${cardContainer}:hover &`]: {
      opacity: 1,
    },
  },

  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
      lineHeight: '1.4',
    },
  },
});

export const cardIcon = style({
  position: 'absolute',
  right: '-4.6em',
  bottom: '-2.7rem',
  zIndex: themeVars.zIndex.icon,
  opacity: 1,
  transition: 'opacity 0.3s ease-in-out',
  selectors: {
    [`${cardContainer}:hover &`]: {
      opacity: 0,
    },
  },
  '@media': {
    [media.mobile]: {
      right: '-4.6rem',
      bottom: '-2rem',
    },
  },
});

export const cardButtonWrapper = style({
  position: 'absolute',
  bottom: '3rem',
  left: '2.7rem',
  zIndex: themeVars.zIndex.button,
  '@media': {
    [media.mobile]: {
      bottom: '2rem',
      left: '2rem',
    },
  },
});
