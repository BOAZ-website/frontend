import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const sectionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  alignItems: 'center',
  textAlign: 'center',
  '@media': {
    [media.mobile]: {
      gap: '1.6rem',
    },
  },
});

export const subTitle = style({
  ...typography.h2_bd_30,
  color: themeVars.color.primary[100],
  '@media': {
    [media.mobile]: {
      ...typography.body2_bd_20,
    },
  },
});

export const title = style({
  ...typography.h1_bd_40,
  color: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});
