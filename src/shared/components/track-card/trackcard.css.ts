import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

const cardBase = style({
  width: '100%',
  height: '100%',
  borderRadius: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'absolute',
  backfaceVisibility: 'hidden',
  padding: '2.5rem',
});

export const cardContainer = style({
  width: '31rem',
  height: '35rem',
  borderRadius: '1.2rem',
  position: 'relative',
  transition: 'transform 0.2s ease',
  transformStyle: 'preserve-3d',
  cursor: 'pointer',
});

export const cardFront = style([
  cardBase,
  {
    backgroundColor: themeVars.color.grayscale.white,
    zIndex: 2,
  },
]);

export const cardBack = style([
  cardBase,
  {
    backgroundColor: themeVars.color.grayscale[800],
    transform: 'rotateY(180deg)',
    zIndex: 1,
  },
]);

export const cardTitle = style({
  color: themeVars.color.grayscale.black,
  ...typography.h2_bd_30,
  marginTop: '1.7rem',
  marginBottom: '1rem',
});

export const cardDesc = style({
  color: themeVars.color.grayscale[600],
  ...typography.body3_bd_18,
  marginTop: '1.6rem',
  marginBottom: '2rem',
});

export const cardImage = style({
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

export const cardHovered = style({
  transform: 'rotateY(180deg)',
});
