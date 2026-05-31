import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  width: '100%',
  minHeight: '100%',
  backgroundColor: themeVars.color.grayscale.black,
  paddingTop: '16.7rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '40rem',
  '@media': {
    [media.mobile]: {
      paddingTop: '6.3rem',
      paddingBottom: '10rem',
    },
  },
});

export const contentWrapper = style({
  width: '100%',
  maxWidth: '120rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '18.1rem',
  '@media': {
    [media.mobile]: {
      gap: '4.5rem',
      padding: '0 2.4rem',
    },
  },
});

export const mobileButtonWrapper = style({
  display: 'none',
  '@media': {
    [media.mobile]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
});

export const chatContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  ...typography.text_rg_14,
});
