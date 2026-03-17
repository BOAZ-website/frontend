import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '100%',
  maxWidth: '30rem', 
  height: '40rem', 
  borderRadius: '2rem', 
  overflow: 'hidden',
  position: 'relative', 
  transition: 'transform 0.6s ease',
  transformStyle: 'preserve-3d',
  backgroundColor: themeVars.color.grayscale.white,
  boxShadow: '0 1rem 2.5rem rgba(0, 0, 0, 0.3)', 
});

export const cardFront = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center',
  justifyContent: 'center',
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
  color: themeVars.color.grayscale.black, 
  ...typography.body3_bd_18, 
  marginBottom: '1rem', 
});

export const cardDesc = style({
  color: themeVars.color.grayscale[600],
  ...typography.body3_bd_18,
  marginBottom: '2rem',
});

export const cardButton = style({
  position: 'absolute', 
  bottom: '2.5rem',
  left: '2.5rem',
  padding: '1rem 2rem', 
  backgroundColor: themeVars.color.primary[100],
  color: themeVars.color.grayscale.white,
  borderRadius: '2rem',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

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