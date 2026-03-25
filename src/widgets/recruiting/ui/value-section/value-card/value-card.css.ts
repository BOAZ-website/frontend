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
  padding: '2.8rem 6.65rem 4rem',
  gap: '4rem',
  backgroundColor: 'transparent',
});

export const iconWrapper = style({
  width: '9.7rem',
  height: '9.7rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: themeVars.color.grayscale[100],
  overflow: 'hidden',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1.5rem',
  whiteSpace: 'pre-wrap',
});

export const title = style({
  ...typography.body2_bd_20,
});

export const description = style({
  ...typography.text_rg_20,
});
