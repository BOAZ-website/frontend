import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  height: '27.8rem',
  borderRadius: '20px',
  alignItems: 'center',
  backgroundColor: themeVars.color.grayscale[900],
  padding: '1.7rem 2rem 1.7rem 4rem',
  gap: '4rem',
  border: `2px solid ${themeVars.color.grayscale[800]}`,
  transition: 'all 0.3s ease-in-out ',
  cursor: 'pointer',
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      height: 'auto',
      padding: 0,
      gap: 0,
      alignItems: 'stretch',
      borderRadius: '20px',
      overflow: 'hidden',
    },
  },
});

export const tagWrapper = style({
  display: 'flex',
  '@media': {
    [media.mobile]: {
      order: 3,
      marginLeft: 'auto',
    },
  },
});

export const textSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
  height: '100%',
  gap: '1.3rem',
  '@media': {
    [media.mobile]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: 'auto',
      gap: '2rem',
      padding: '1.5rem',
      order: 2,
      alignContent: 'flex-start',
    },
  },
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.h4_bd_24,
  lineHeight: '1.5',
  width: '100%',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  '@media': {
    [media.mobile]: {
      ...typography.body4_rg_18,
      lineHeight: '1.4',
      WebkitLineClamp: 2,
      order: 1,
      width: '100%',
    },
  },
});

export const description = style({
  color: themeVars.color.grayscale[200],
  ...typography.body5_rg_16,
  lineHeight: '1.6',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  '@media': {
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const date = style({
  marginTop: 'auto',
  color: themeVars.color.grayscale[100],
  ...typography.text_rg_14,
  '@media': {
    [media.mobile]: {
      marginTop: 0,
      ...typography.body5_rg_12,
      order: 2,
      flex: 1,
    },
  },
});

export const imageSection = style({
  width: '32.533rem',
  height: '24.4rem',
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
  overflow: 'hidden',
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      width: '100%',
      height: '20rem',
      borderRadius: 0,
      order: 1,
    },
  },
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
