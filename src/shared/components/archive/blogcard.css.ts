import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '92.9rem',
  height: '27.8rem',
  borderRadius: '2.4rem',
  alignItems: 'center',
  backgroundColor: themeVars.color.grayscale[900],
  padding: '3.2rem',
  gap: '4.8rem',
  border: `2px solid ${themeVars.color.grayscale[800]}`,
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  boxSizing: 'border-box',
  position: 'relative',
});

export const tagWrapper = style({
  width: 'fit-content',
  marginBottom: '1.2rem',
});

export const textSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'hidden',
  height: '100%',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.h4_bd_24,
  lineHeight: '1.4',
  width: '100%',
  marginBottom: '1.2rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  flexShrink: 0,
  fontWeight: 700,
});

export const description = style({
  color: themeVars.color.grayscale[400],
  ...typography.body5_rg_16,
  lineHeight: '1.6',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  marginBottom: '1.2rem',
  fontWeight: 400,
});

export const date = style({
  marginTop: 'auto',
  color: themeVars.color.grayscale[100],
  ...typography.text_rg_14,
});

export const imageSection = style({
  width: '32.5333rem',
  height: '24.2rem',
  aspectRatio: '4 / 3',
  borderRadius: '1.7192rem',
  backgroundColor: themeVars.color.grayscale.white,
  overflow: 'hidden',
  flexShrink: 0,
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
