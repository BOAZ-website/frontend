import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '30rem',
  height: '27rem',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: themeVars.color.grayscale[800],
  gap: '3rem',
  padding: '3.8rem 3.25rem 4.5rem',
});

export const iconWrapper = style({
  width: '9.7rem',
  height: '9.7rem',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  backgroundColor: themeVars.color.grayscale[100],
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18_card,
});
