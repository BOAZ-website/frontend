import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.3rem',
  height: '35rem',
  borderRadius: '2rem',
  backgroundColor: themeVars.color.grayscale[900],
  padding: '2rem 2.1rem 2.1rem 2.1rem',
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  outline: '1px solid transparent',

  selectors: {
    [`&:hover`]: {
      border: `1px solid #2C3F61`,
      outline: `1px solid #2C3F61`,
      outlineOffset: '-2px',
      background: `
  linear-gradient(180deg, rgba(104, 203, 236, 0.00) 0%, rgba(104, 203, 236, 0.20) 100%),
  linear-gradient(180deg, rgba(122, 100, 249, 0.20) 0%, rgba(122, 100, 249, 0.00) 100%),
  ${themeVars.color.grayscale[950]}
`,
    },
  },

  '@media': {
    [media.mobile]: {
      width: '100%',
      height: 'auto',
    },
  },
});

export const imageSection = style({
  width: '100%',
  height: '16.5rem',
  borderRadius: '1.6rem',
  backgroundColor: themeVars.color.grayscale.white,
  overflow: 'hidden',
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      height: '14rem',
      borderRadius: '10px',
    },
  },
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  paddingTop: '1.6rem',
  '@media': {
    [media.mobile]: {
      paddingTop: '2rem',
    },
  },
});

export const subTitle = style({
  color: themeVars.color.grayscale[100],
  ...typography.body4_rg_18,
  marginBottom: '0.4rem',
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_14,
      marginBottom: '0.4rem',
    },
  },
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.body1_rg_24,
  lineHeight: '1.4',
  height: '6.4rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  marginBottom: '1rem',
  '@media': {
    [media.mobile]: {
      ...typography.body4_rg_18,
      height: 'auto',
      marginBottom: '3.2rem',
    },
  },
});

export const bottomInfo = style({
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const tagContainer = style({
  display: 'flex',
  gap: '0.6rem',
});

export const iconContainer = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
});

export const iconItem = style({
  color: themeVars.color.grayscale[400],
  transition: 'color 0.2s',
  selectors: {
    [`&:hover`]: { color: themeVars.color.grayscale.white },
  },
});
