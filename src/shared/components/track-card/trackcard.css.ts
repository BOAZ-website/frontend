import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '31rem', 
  height: '35rem', 
  borderRadius: '1.2rem', 
  overflow: 'hidden',
  position: 'relative', 
  transition: 'transform 0.6s ease',
  transformStyle: 'preserve-3d',
  backgroundColor: themeVars.color.grayscale[800],
});

export const cardFront = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  position: 'absolute',
  backfaceVisibility: 'hidden', 
  padding: '2.5rem', 
});

export const cardBack = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  backfaceVisibility: 'hidden', 
  padding: '2.5rem', 
  transform: 'rotateY(180deg)', 
});

export const cardTitle = style({
  color: themeVars.color.grayscale.white, 
  ...typography.h2_bd_30, 
  marginBottom: '1rem', 
});

export const cardDesc = style({
  color: themeVars.color.grayscale[600],
  ...typography.body3_bd_18,
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

export const cardButton = style({
  position: 'absolute', 
  bottom: '2.5rem',
  left: '2.5rem',
  padding: '1.2rem 3rem', 
  backgroundColor: themeVars.color.primary[100],
  color: themeVars.color.grayscale.white,
  ...typography.body3_bd_18,
  borderRadius: '4rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  zIndex: 10,

  ':hover': {
    backgroundColor: themeVars.color.primary[200],
  },
});

export const cardHovered = style([
  cardContainer, 
  {
    transform: 'rotateY(180deg)',
  }
]);