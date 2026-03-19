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

const cardBase = style({
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '2.5rem',
  display: 'flex',
  flexDirection: 'column',
  transition: 'opacity 0.3s ease-in-out', // 서서히 나타나는 효과
});

export const cardFront = style([
  cardBase,
  {
    backgroundColor: themeVars.color.grayscale.white,
    zIndex: 1,
    opacity: 1,
  },
]);

export const cardBack = style([
  cardBase,
  {
    backgroundColor: themeVars.color.grayscale[800],
    zIndex: 2,
    opacity: 0,
  },
]);

export const frontHovered = style({
  opacity: 0,
});

export const backHovered = style({
  opacity: 1,
});

export const cardTitle = style({
  ...typography.h2_bd_30,
  marginTop: '1.7rem',
  marginBottom: '1rem',
});

export const cardDesc = style({
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