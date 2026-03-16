import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const root = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.37rem',
});

export const unit = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.2rem',
});

export const label = style({
  ...typography.body5_rg_16,
  color: themeVars.color.primary[200],
});

export const value = style({
  ...typography.display_bd_72,
  color: themeVars.color.primary[100],
});

export const valueTick = style([value]);

export const separator = style({
  ...typography.display_bd_72,
  color: themeVars.color.primary[100],
  opacity: 0.5,
});

// 마감 종료
export const closedRoot = style([root, {}]);

export const closedText = style({
  color: themeVars.color.primary[100],
  opacity: 0.6,
  ...typography.display_bd_72,
});
