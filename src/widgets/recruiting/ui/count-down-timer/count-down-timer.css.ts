import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  gap: '1.5rem',
  color: themeVars.color.primary[100],
});

export const unit = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
  minWidth: '16rem',
});

export const label = style({
  ...typography.body5_rg_16,
  color: themeVars.color.primary[200],
});

export const value = style({
  ...typography.display2_bd_72,
});

export const separator = style({
  ...typography.display2_bd_72,
  alignSelf: 'center',
});
