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
    },
  },
});

export const thumbnail = style({
  width: '47.3rem',
  flexShrink: 0,
  height: '26.6rem',
  objectFit: 'cover',
  backgroundColor: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      width: '100%',
      flexShrink: 1,
      height: 'auto',
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  '@media': {
    [media.mobile]: {
      width: '100%',
      gap: '1.6rem',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
});

export const title = style({
  ...typography.h4_bd_24,
  color: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      ...typography.body5_bd_12,
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
      ...typography.body6_rg_10,
      lineHeight: '1.4',
    },
  },
});

export const buttonIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  '@media': {
    [media.mobile]: {
      width: '0.8rem',
      height: '0.8rem',
    },
  },
});
