import { style, styleVariants } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  position: 'relative',
  zIndex: 100,
});

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  zIndex: 99,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  height: '4.8rem',
  padding: '0 1.4rem',
  borderRadius: '20px',
  flexShrink: 0,
  WebkitAppearance: 'none',
  backgroundColor: themeVars.color.grayscale[900],
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  color: themeVars.color.grayscale.white,
  cursor: 'pointer',
  ...typography.body4_rg_18,
  whiteSpace: 'nowrap',

  ':hover': {
    backgroundColor: themeVars.color.grayscale[800],
  },

  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_12,
      height: '3.2rem',
      padding: '0 0.4rem 0 0.8rem',
      gap: '0.4rem',
    },
  },
});

export const overlay = style({
  position: 'absolute',
  top: 'calc(100% + 3.8rem)',
  right: 0,
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxHeight: '24rem',
  overflowY: 'auto',
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale[900],
  border: `1px solid ${themeVars.color.grayscale[800]}`,

  '::-webkit-scrollbar': { width: '0.4rem' },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: themeVars.color.grayscale[600],
    borderRadius: '20px',
  },
  '@media': {
    [media.mobile]: {
      top: 'calc(100% + 1rem)',
    },
  },
});

const optionBase = style({
  width: '100%',
  padding: '1.2rem 1.6rem',
  cursor: 'pointer',
  ...typography.body4_rg_18,
  backgroundColor: 'transparent',
  transition: 'background-color 0.15s ease',
  whiteSpace: 'nowrap',
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      ...typography.body6_rg_12,
      padding: '0.8rem 1.2rem',
    },
  },
});

export const chevronIcon = style({
  flexShrink: 0,
  width: '1.6rem',
  height: '1.6rem',
});

export const option = styleVariants({
  default: [
    optionBase,
    {
      color: themeVars.color.grayscale.white,
      ':hover': {
        backgroundColor: themeVars.color.grayscale[800],
      },
    },
  ],
  selected: [
    optionBase,
    {
      color: themeVars.color.primary[100],
    },
  ],
});
