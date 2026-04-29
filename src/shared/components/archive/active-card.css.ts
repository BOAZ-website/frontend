import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.3rem',
  height: '35rem',
  borderRadius: '2rem',
  //border: `1px solid ${themeVars.color.grayscale[800]}`,
  overflow: 'hidden',
  backgroundColor: themeVars.color.grayscale[900],

  border: `2px solid transparent`, 
  transition: 'border-color 0.2s ease-in-out',
  cursor: 'pointer',

  selectors: {
    [`&:hover`]: {
      borderColor: themeVars.color.grayscale[800],
    },
  },
});

export const imageSection = style({
  width: '100%',
  height: '25rem',
  backgroundColor: themeVars.color.grayscale.white,
  opacity: 0.6,
  objectFit: 'cover',
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '1.2rem 1.0rem 0.8rem',
  justifyContent: 'space-between',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.body4_rg_18,
  lineHeight: '1.4',
  height: '6.8rem',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const bottomInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const date = style({
  color: themeVars.color.grayscale.white,
  ...typography.text_rg_14,
});

export const tagButton = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20rem',
    cursor: 'pointer',
    border: '1px solid transparent',
  },
  variants: {
    variant: {
      mini: {
        ...typography.text_rg_14,
        padding: '0.4rem 1.2rem',
      },
    },
    color: {
      outlined: {
        color: themeVars.color.grayscale[400],
        backgroundColor: 'transparent',
        border: `1px solid ${themeVars.color.grayscale[400]}`,
      },
    },
  },
});
