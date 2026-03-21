import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardWrapper = style({
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '10px',
  padding: '2.4rem 3.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.3rem',
});
export const cardHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});
export const title = style({
  color: themeVars.color.grayscale.black,
  ...typography.body2_bd_20,
});
export const subTitle = style({
  color: themeVars.color.grayscale[400],
  ...typography.body3_bd_18,
});
export const descriptionText = style({
  color: themeVars.color.grayscale.black,
  ...typography.body5_rg_16,
});
