import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: themeVars.color.grayscale.black,
});

export const section = style({
  width: '100%',
  maxWidth: '104.3rem',
  padding: '8rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
});

export const sectionTitle = style({
  ...typography.h1_bd_40,
  color: themeVars.color.grayscale.white,
  textAlign: 'center',
});

export const tabRow = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10rem',
});

export const quoteBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',
  textAlign: 'center',
  color: themeVars.color.grayscale.white,
});

export const quoteText = style({
  ...typography.h2_bd_30,
});

export const quoteDesc = style({
  ...typography.body4_rg_18,
  lineHeight: '3rem',
  whiteSpace: 'pre-line',
  marginBottom: '3.4rem',
});

export const reviewSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10rem',
  marginTop: '20rem',
  marginBottom: '20rem',
});
