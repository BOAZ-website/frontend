import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '80vh',
  gap: '2.4rem',
  textAlign: 'center',
  paddingBottom: '10rem',
});

export const title = style({
  ...typography.display2_bd_72,
  color: themeVars.color.grayscale.white,
});

export const description = style({
  ...typography.body4_rg_18,
  color: themeVars.color.grayscale.white,
  marginTop: '2rem',
  lineHeight: '1.6',
  marginBottom: '2rem',
});
