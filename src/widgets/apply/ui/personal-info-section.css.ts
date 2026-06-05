import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',
  width: '100%',
  paddingBottom: '12rem',
  '@media': {
    [media.mobile]: {
      gap: '12rem',
      paddingBottom: '0rem',
    },
  },
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  '@media': {
    [media.mobile]: {
      gap: '5rem',
    },
  },
});

export const sectionTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h2_bd_30,
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});

export const sectionDescription = style({
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
  marginTop: '-1.4rem',
  '@media': {
    [media.mobile]: {
      marginTop: '-3.5rem',
    },
  },
});

export const groupContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const row = style({
  display: 'flex',
  gap: '2.4rem',
  width: '100%',
  '@media': {
    [media.mobile]: {
      gap: '1.2rem',
    },
  },
});

export const radioButton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: '0.8rem',
  '@media': {
    [media.mobile]: {
      gap: '1.6rem',
    },
  },
});

export const footer = style({
  display: 'flex',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  ...typography.h4_bd_24,
  transition: 'opacity 0.2s ease',

  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },

  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
    },
  },
});

export const addDegree = style({
  color: themeVars.color.grayscale[400],
  cursor: 'pointer',
  marginTop: '-1.2rem',
  ...typography.text_rg_14,
  ':hover': {
    color: themeVars.color.grayscale.white,
  },
});

export const dropdownWrapper = style({
  position: 'relative',
  flex: 1,
});

export const errorText = style({
  color: themeVars.color.error.red_100,
  ...typography.text_rg_14,
  textAlign: 'center',
});

export const fieldError = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  ...typography.text_rg_14,
  color: themeVars.color.error.red_100,
});

export const interviewSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const interviewDescription = style({
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
  whiteSpace: 'pre-line',
  lineHeight: '1.6',
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_14,
      lineHeight: '1.4',
    },
  },
});

export const degreeRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const removeDegreeButton = style({
  flexShrink: 0,
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
  padding: 0,
  ':hover': {
    color: themeVars.color.grayscale[100],
  },
});
