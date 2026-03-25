import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',
  width: '100%',
  paddingBottom: '12rem',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

export const sectionTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h2_bd_30,
});

export const sectionDescription = style({
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
  marginTop: '-1.4rem',
});

export const row = style({
  display: 'flex',
  gap: '2.4rem',
  width: '100%',
});

export const radioButton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: '0.8rem',
});

export const footer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  ...typography.h4_bd_24,
});

export const addDegree = style({
  color: themeVars.color.grayscale[400],
  cursor: 'pointer',
  marginTop: '-1.2rem',
  ...typography.text_rg_14,
  ':hover': {
    color: themeVars.color.grayscale.white,
  },
});
