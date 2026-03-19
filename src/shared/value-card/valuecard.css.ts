import { style } from '@vanilla-extract/css';

import { typography } from '../styles/typography.css';
import { themeVars } from '@/shared/styles/theme.css';

export const cardContainer = style({
  width: '30.5rem',
  height: '26.7rem',
  borderRadius: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  //padding: '3.5rem 3.8rem 3.5rem 3.9rem',
  backgroundColor: themeVars.color.grayscale[800],
});

export const iconWrapper = style({
  width: '9.7rem',
  height: '9.7rem',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3.8rem',
  marginBottom: '3rem',
  backgroundColor: themeVars.color.grayscale[100],
  overflow: 'hidden',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  lineHeightStep: '3rem',
  gap: '0.8rem',
  marginBottom: '4.5rem',
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
});
