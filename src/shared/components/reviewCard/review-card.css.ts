import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardWrapper = style({
  backgroundColor: themeVars.color.grayscale.white,
  borderRadius: '1.25rem',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  boxShadow: '0 0.4rem 2rem rgba(0, 0, 0, 0.1)',
});

export const cardHeader = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.75rem',
});

export const title = style({
  color: themeVars.color.grayscale.black,
  ...typography.body2_bd_20,
  textAlign: 'center',
});

export const subTitle = style({
  color: themeVars.color.grayscale[400],
  ...typography.body3_bd_18,
  textAlign: 'center',
});

export const descriptionText = style({
  color: themeVars.color.grayscale.black,
  ...typography.body5_rg_16,
});

export const cardGrid = style({
  display: 'inline-grid',
  rowGap: '2.3rem',
  columnGap: '33px',
  gridTemplateRows: 'repeat(3, fit-content(100%))',
  gridTemplateColumns: 'repeat(2, fit-content(100%))',
  gap: '2.4rem',
  padding: '3.5rem',
});
