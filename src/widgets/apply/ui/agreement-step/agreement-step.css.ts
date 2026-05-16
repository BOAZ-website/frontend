import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
  width: '100%',
});

export const sections = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
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
  width: '2rem',
  height: '2rem',
  accentColor: themeVars.color.primary[100],
  cursor: 'pointer',
  flexShrink: 0,
});

export const checkboxLabel = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale.white,
});

export const viewFullButton = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[400],
  background: 'none',
  border: `1px solid ${themeVars.color.grayscale[600]}`,
  borderRadius: themeVars.radius.xs,
  padding: '0.4rem 0.8rem',
  cursor: 'pointer',
  marginLeft: '0.4rem',
  flexShrink: 0,
});
