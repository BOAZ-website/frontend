import { style } from '@vanilla-extract/css';

import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12.5rem',
});

export const recruitDate = style({
  ...typography.display2_bd_72,
});
