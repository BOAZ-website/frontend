import { style } from '@vanilla-extract/css';

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
  backgroundColor: themeVars.color.grayscale[400],
  objectFit: 'cover',
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '1.2rem 1.2rem 0.9rem 1.2rem',
  justifyContent: 'space-between',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.body2_rg_20,
  lineHeight: '1.2',
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
});
