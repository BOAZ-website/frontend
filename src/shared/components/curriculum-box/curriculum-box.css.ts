import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  width: '100%',
  maxWidth: '35.5rem',
  backgroundColor: 'rgba(217, 217, 217, 0.10)',
  borderRadius: '10px',
  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const contentText = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
});
