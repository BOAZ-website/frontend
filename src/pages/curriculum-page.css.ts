import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: themeVars.color.grayscale.black,
});

export const section = style({
  width: '100%',
  maxWidth: '104.3rem',
  padding: '8rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
  '@media': {
    [media.mobile]: {
      padding: '4rem 2rem',
      gap: '4rem',
    },
  },
});

export const sectionTitle = style({
  ...typography.h1_bd_40,
  color: themeVars.color.grayscale.white,
  textAlign: 'center',
  '@media': {
    [media.mobile]: {
      ...typography.h5_bd_16,
    },
  },
});

export const tabRow = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10rem',
  '@media': {
    [media.mobile]: {
      marginTop: '2rem',
    },
  },
});

export const quoteBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.8rem',
  textAlign: 'center',
  color: themeVars.color.grayscale.white,
});

export const quoteText = style({
  ...typography.h2_bd_30,
  '@media': {
    [media.mobile]: {
      ...typography.h5_bd_16,
    },
  },
});

export const quoteDesc = style({
  ...typography.body4_rg_18,
  whiteSpace: 'pre-line',
  lineHeight: '1.5',
  maxWidth: '90rem',
  marginBottom: '3.4rem',
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
      lineHeight: '1.4',
      marginBottom: '0',
    },
  },
});

export const trackIcon = style({
  '@media': {
    [media.mobile]: {
      maxWidth: '8rem',
      maxHeight: '8rem',
    },
  },
});

export const reviewSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10rem',
  marginTop: '20rem',
  marginBottom: '20rem',
  width: '100%',
  '@media': {
    [media.mobile]: {
      gap: '2rem',
      marginTop: '8rem',
      marginBottom: '6rem',
    },
  },
});

export const dividerRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10.5rem',
  width: '100%',
  '@media': {
    [media.mobile]: {
      gap: '2rem',
    },
  },
});

const lineBase = {
  flex: 1,
  height: '0.15rem',
} as const;

export const dividerLineLeft = style({
  ...lineBase,
  background: `linear-gradient(to right, transparent 10%, ${themeVars.color.grayscale[100]} 70%, ${themeVars.color.grayscale.white} 100%)`,
});

export const dividerLineRight = style({
  ...lineBase,
  background: `linear-gradient(to left, transparent 10%, ${themeVars.color.grayscale[100]} 70%, ${themeVars.color.grayscale.white} 100%)`,
});

export const reviewContent = style({
  width: '100%',
  maxWidth: '104.3rem',
  padding: '0 2rem',
});

export const archiveButtonIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  '@media': {
    [media.mobile]: {
      width: '0.8rem',
      height: '0.8rem',
    },
  },
});
