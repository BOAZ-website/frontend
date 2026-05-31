import { style, styleVariants } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
});

export const section = style({
  width: '100%',
  maxWidth: '104.3rem',
  padding: '4rem 0 20rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  '@media': {
    [media.mobile]: {
      padding: '2rem 2.5rem 10rem',
      gap: '2rem',
      alignContent: 'center',
      justifyContent: 'center',
    },
  },
});

export const tabRow = style({
  display: 'flex',
  gap: '4rem',
  borderBottom: `1px solid ${themeVars.color.grayscale[800]}`,
  '@media': {
    [media.mobile]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
});

const tabBase = style({
  paddingBottom: '1.6rem',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  borderBottom: '2px solid transparent',
  marginBottom: '-1px',
  transition: 'color 0.2s ease, border-color 0.2s ease',
});

export const tab = styleVariants({
  default: [
    tabBase,
    {
      ...typography.h4_bd_24,
      color: themeVars.color.grayscale[400],
      ':hover': {
        color: themeVars.color.grayscale.white,
      },
      '@media': {
        [media.mobile]: {
          ...typography.body3_bd_18,
          paddingBottom: '1.55rem',
        },
      },
    },
  ],
  active: [
    tabBase,
    {
      ...typography.h4_bd_24,
      color: themeVars.color.grayscale.white,
      borderBottomColor: themeVars.color.grayscale.white,
      '@media': {
        [media.mobile]: {
          ...typography.body3_bd_18,
          paddingBottom: '1.55rem',
        },
      },
    },
  ],
});

export const filterBar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid',
  borderImageSource: `linear-gradient(to right, transparent, ${themeVars.color.grayscale[100]} 50%, transparent)`,
  borderImageSlice: '0 0 1 0', // top right bottom left
});

export const filterGroup = style({
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'center',
});

export const cardGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2.4rem',
  '@media': {
    [media.mobile]: {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
});

export const blogGrid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '@media': {
    [media.mobile]: {
      gap: '2rem',
    },
  },
});

export const blogLink = style({
  display: 'block',
  textDecoration: 'none',
  transition: 'opacity 0.2s ease',

  ':hover': {
    opacity: 0.85,
  },
});

export const emptyState = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10rem 0',
  color: themeVars.color.grayscale[400],
  ...typography.body4_rg_18,
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
      padding: '4rem 0',
    },
  },
});

export const paginationWrapper = style({
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
});
