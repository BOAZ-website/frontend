import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  gap: '7.2rem',
  alignItems: 'center',
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap: '2.4rem',
      alignItems: 'flex-start',
    },
  },
});

export const thumbnail = style({
  width: '47.3rem',
  height: '26.6rem',
  objectFit: 'cover',
  flexShrink: 0,
  backgroundColor: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      width: '100%',
      height: '20rem',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  '@media': {
    [media.mobile]: {
      gap: '1.6rem',
    },
  },
});

export const title = style({
  ...typography.h4_bd_24,
  color: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      ...typography.body2_bd_20,
    },
  },
});

export const description = style({
  ...typography.body4_rg_18,
  lineHeight: '3rem',
  color: themeVars.color.grayscale.white,
  whiteSpace: 'pre-line',
  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
      lineHeight: '2.4rem',
    },
  },
});
