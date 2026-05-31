import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: `color-mix(in srgb, ${themeVars.color.grayscale.white} 30%, transparent)`,
});

export const subTitle = style({
  ...typography.h3_sb_30,
  marginBottom: '2.5rem',
  '@media': {
    [media.mobile]: {
      ...typography.body2_bd_20,
      marginBottom: '2rem',
    },
  },
});

export const title = style({
  ...typography.display1_bd_80,
  marginBottom: '5rem',
  '@media': {
    [media.mobile]: {
      ...typography.h1_bd_36,
      marginBottom: '2.8rem',
    },
  },
});

export const emphasis = style({
  color: `color-mix(in srgb, ${themeVars.color.primary[100]} 30%, transparent)`,
  fontStyle: 'normal',
});

export const description = style({
  ...typography.h1_md_40,
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});
