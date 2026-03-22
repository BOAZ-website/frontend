import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const textFieldWithCounterWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '100%',
});

export const fieldBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: themeVars.color.error.red_100,
  ...typography.text_rg_14,
});
