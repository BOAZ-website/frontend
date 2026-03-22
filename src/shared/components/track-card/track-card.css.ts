import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '31rem',
  height: '35rem',
  borderRadius: '1.2rem',
  position: 'relative',
  cursor: 'pointer',
  overflow: 'hidden',
});

const cardFaceBase = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  inset: 0,
  padding: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  transition: 'opacity 0.3s ease-in-out',
});

export const cardFaceFront = style([
  cardFaceBase,
  {
    backgroundColor: themeVars.color.grayscale.white,
    selectors: {
      [`${cardContainer}:hover &`]: { opacity: 0 },
    },
  },
]);

export const cardFaceBack = style([
  cardFaceBase,
  {
    backgroundColor: themeVars.color.grayscale[800],
    color: themeVars.color.grayscale.white,
    opacity: 0,
    selectors: {
      [`${cardContainer}:hover &`]: { opacity: 1 },
    },
  },
]);

export const cardTitle = style({
  ...typography.h2_bd_30,
  marginTop: '1.7rem',
  marginBottom: '1rem',
  color: themeVars.color.grayscale.black, // 앞면 기본값, 뒷면은 parent에서 inherit
});

export const cardDesc = style({
  ...typography.body3_bd_18,
  marginTop: '1.6rem',
  marginBottom: '2rem',
  color: themeVars.color.grayscale[600], // 앞면 기본값, 뒷면은 parent에서 inherit
});

export const cardCharacter = style({
  position: 'absolute',
  right: '-1rem',
  bottom: '-1rem',
  width: '24rem',
  height: 'auto',
  objectFit: 'contain',
});

export const cardButtonWrapper = style({
  position: 'absolute',
  bottom: '2.5rem',
  left: '2.5rem',
  zIndex: 10,
});
