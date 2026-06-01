import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
  '@media': {
    [media.mobile]: {
      width: '100%',
    },
  },
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
  width: '70.6rem',
  height: '6.5rem',
  padding: '2rem 1rem 2rem 3rem',
  backgroundColor: themeVars.color.grayscale.white,
  boxSizing: 'border-box',
  overflow: 'hidden',
  borderRadius: '40px',
  '@media': {
    [media.mobile]: {
      width: '100%',
      flex: 1,
      height: '4.4rem',
      padding: '0.4rem 0.4rem 0.4rem 0.8rem',
    },
  },
});

export const inputField = style({
  flex: 1,
  backgroundColor: 'transparent',
  color: themeVars.color.grayscale.black,
  ...typography.body4_rg_18,

  '::placeholder': {
    color: themeVars.color.grayscale[400],
  },
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
    },
  },
});

export const errorMessage = style({
  color: themeVars.color.error.red_100,
  ...typography.text_rg_14,
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
    },
  },
});

export const successMessage = style({
  color: themeVars.color.grayscale.white,
  ...typography.text_rg_14,
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
    },
  },
});
