import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.3rem',
  height: '35rem',
  borderRadius: '20px',
  overflow: 'hidden',
  backgroundColor: themeVars.color.grayscale[900],

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
      borderRadius: '20px',
      gap: '1.3rem',
    },
  },
});

export const imageSection = style({
  width: '100%',
  height: '25rem',
  backgroundColor: themeVars.color.grayscale[400],
  objectFit: 'cover',
  '@media': {
    [media.mobile]: {
      height: '20rem',
    },
  },
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '1.2rem 1.2rem 0.9rem 1.2rem',
  justifyContent: 'space-between',
  '@media': {
    [media.mobile]: {
      gap: '1.2rem',
    },
  },
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.body2_rg_20,
  lineHeight: '1.2',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  '@media': {
    [media.mobile]: {
      ...typography.text_rg_14,
    },
  },
});

export const bottomInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const date = style({
  color: themeVars.color.grayscale.white,
  ...typography.text_rg_14,
  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_12,
    },
  },
});

export const tagButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  cursor: 'pointer',
  ...typography.text_rg_14,
  padding: '0.45rem 1.2rem',

  color: themeVars.color.grayscale[100],
  backgroundColor: 'transparent',
  border: `1px solid ${themeVars.color.grayscale[400]}`,
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_10,
      padding: '0.3rem 0.8rem',
    },
  },
});
