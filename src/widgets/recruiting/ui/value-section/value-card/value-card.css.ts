import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  width: '30rem',
  height: '27rem',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2.8rem 6.65rem 4rem',
  gap: '4rem',
  backgroundColor: 'transparent',
  '@media': {
    [media.mobile]: {
      height: 'auto',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 0,
      gap: '2rem',
    },
  },
});

export const iconWrapper = style({
  width: '9.7rem',
  height: '9.7rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '@media': {
    [media.mobile]: {
      width: '8.8rem',
      height: '8.8rem',
      flexShrink: 0,
    },
  },
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1.5rem',
  whiteSpace: 'pre-wrap',
  '@media': {
    [media.mobile]: {
      alignItems: 'center',
      textAlign: 'center',
      gap: '1.2rem',
    },
  },
});

export const title = style({
  ...typography.body2_bd_20,
  '@media': {
    [media.mobile]: {
      ...typography.body3_bd_18,
    },
  },
});

export const description = style({
  ...typography.text_rg_20,
  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
    },
  },
});
