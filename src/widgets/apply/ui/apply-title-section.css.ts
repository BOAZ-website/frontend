import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '120px',
  width: '100%',
  marginTop: '4rem',
  marginBottom: '6rem',
  position: 'relative',
  '@media': {
    [media.mobile]: {
      marginTop: '0rem',
      marginBottom: '6rem',
    },
  },
});

export const titleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '@media': {
    [media.mobile]: {
      gap: '0.8rem',
    },
  },
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.h1_bd_40,
  '@media': {
    [media.mobile]: {
      ...typography.h3_bd_28,
    },
  },
});

export const subtitle = style({
  ...typography.body4_rg_18,
  color: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_14,
    },
  },
});
