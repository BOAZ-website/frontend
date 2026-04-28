import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.3rem',
  height: '35rem',
  borderRadius: '2rem',
  border: '0.1rem',
  overflow: 'hidden',
  backgroundColor: themeVars.color.grayscale[800],
});

export const imageSection = style({
  width: '100%',
  height: '22rem',
  backgroundColor: themeVars.color.grayscale.white,
  objectFit: 'cover',
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '2.0rem',
  gap: '1.2rem',
  justifyContent: 'space-between',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
  lineHeight: '1.4',
  height: '6.8rem',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const bottomInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const date = style({
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
});

export const tag = style({
  padding: '0.6rem 1.2rem',
  borderRadius: '10rem',
  border: `1px solid ${themeVars.color.grayscale[400]}`,
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
});
