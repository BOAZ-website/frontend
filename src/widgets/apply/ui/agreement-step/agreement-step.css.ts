import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',
  width: '100%',
});

export const trackSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const trackTitle = style({
  ...typography.h2_bd_30,
  color: themeVars.color.grayscale.white,
});

export const trackOptions = style({
  display: 'flex',
  gap: '2rem',
});

export const trackCard = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',
  flex: 1,
  padding: '2.4rem',
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  borderRadius: themeVars.radius.xs,
  cursor: 'pointer',
  transition: 'border-color 0.2s ease',
});

export const trackCardSelected = style({
  borderColor: themeVars.color.primary[100],
});

export const footer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const checkboxRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',
});

export const checkbox = style({
  width: '2.4rem',
  height: '2.4rem',
  accentColor: themeVars.color.grayscale[400],
  cursor: 'pointer',
  flexShrink: 0,
});

export const checkboxLabel = style({
  ...typography.body3_bd_18,
  color: themeVars.color.grayscale.white,
});

export const viewFullButton = style({
  ...typography.text_rg_14,
  color: themeVars.color.grayscale[100],
  border: `1px solid ${themeVars.color.grayscale[400]}`,
  borderRadius: '8px',
  padding: '0.4rem 1.2rem',
  marginLeft: '1.6rem',
  flexShrink: 0,
});
