import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',
  width: '100%',
  paddingBottom: '12rem',
  '@media': {
    [media.mobile]: {
      gap: '4rem',
      paddingBottom: '6rem',
    },
  },
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
  '@media': {
    [media.mobile]: {
      gap: '1.6rem',
    },
  },
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const sectionTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h2_bd_30,
  lineHeight: '1.3',
  '@media': {
    [media.mobile]: {
      ...typography.h5_bd_16,
      lineHeight: '1.4',
    },
  },
});

export const sectionDescription = style({
  color: themeVars.color.grayscale[400],
  ...typography.text_rg_14,
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
    },
  },
});

export const sectionExperienceTitle = style({
  color: themeVars.color.grayscale.white,
  ...typography.h3_sb_30,
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});

export const tableSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8rem',
  '@media': {
    [media.mobile]: {
      gap: '4rem',
    },
  },
});

export const stackQuestion = style({
  color: themeVars.color.primary[100],
  ...typography.h4_bd_24,
  '@media': {
    [media.mobile]: {
      ...typography.body3_bd_18,
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

export const addProject = style({
  color: themeVars.color.grayscale[400],
  cursor: 'pointer',
  marginTop: '-1.2rem',
  ...typography.text_rg_14,
  alignSelf: 'flex-start',

  selectors: {
    '&:hover': {
      color: themeVars.color.grayscale.white,
    },
  },
});

export const errorText = style({
  color: themeVars.color.error.red_100,
  ...typography.text_rg_14,
  textAlign: 'center',
});

export const footerNav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '4rem',
  ...typography.h4_bd_24,
  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
      marginTop: '2rem',
    },
  },
});

export const footerSubmit = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '12rem',
  ...typography.h4_bd_24,
  '@media': {
    [media.mobile]: {
      gap: '3.2rem',
      ...typography.body5_rg_16,
    },
  },
});

export const navButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  cursor: 'pointer',
  color: themeVars.color.grayscale.white,
  transition: 'opacity 0.2s ease',

  selectors: {
    '&:hover': {
      opacity: 0.7,
    },
  },
});
