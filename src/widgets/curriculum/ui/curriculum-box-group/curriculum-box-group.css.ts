import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '2rem',
  width: 'fit-content',
  '@media': {
    [media.mobile]: {
      gap: '1rem',
      width: '100%',
    },
  },
});

export const weekLabel = style({
  ...typography.body3_bd_18,
  color: themeVars.color.sub.lightblue_100,
  whiteSpace: 'nowrap',
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
    },
  },
});
