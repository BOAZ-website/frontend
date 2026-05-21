import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  maxWidth: '92.9rem',
  height: '27.8rem',
  borderRadius: '20px',
  alignItems: 'center',
  backgroundColor: themeVars.color.grayscale[900],
  padding: '1.7rem 2rem 1.7rem 4rem',
  gap: '4rem',
  border: `2px solid ${themeVars.color.grayscale[800]}`,
  transition: 'all 0.3s ease-in-out ',
  cursor: 'pointer',
});

export const tagWrapper = style({
  display: 'flex',
});

export const textSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
  height: '100%',
  gap: '1.3rem',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.h4_bd_24,
  lineHeight: '28.6px',
  width: '100%',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
});

export const description = style({
  color: themeVars.color.grayscale[200],
  ...typography.body5_rg_16,
  lineHeight: '1.6',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
});

export const date = style({
  marginTop: 'auto',
  color: themeVars.color.grayscale[100],
  ...typography.text_rg_14,
});

export const imageSection = style({
  width: '32.533rem',
  height: '24.4rem',
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale.white,
  overflow: 'hidden',
  flexShrink: 0,
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
