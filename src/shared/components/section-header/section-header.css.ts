import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.3rem',
  alignItems: 'center',
  textAlign: 'center',
});

export const subTitle = style({
  ...typography.h2_bd_30,
  color: themeVars.color.primary[100],
});

export const title = style({
  ...typography.h1_bd_40,
  color: themeVars.color.grayscale.white,
});
