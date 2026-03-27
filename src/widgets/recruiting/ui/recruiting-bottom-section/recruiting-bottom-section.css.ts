import { style } from '@vanilla-extract/css';

import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12.5rem',
  width: '100%',
});

export const dividerText = style({
  flexShrink: 0,
  ...typography.h2_bd_30,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '8rem',
});
