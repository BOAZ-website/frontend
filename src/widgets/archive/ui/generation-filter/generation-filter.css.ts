import { style, styleVariants } from '@vanilla-extract/css';

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
  padding: '0.9rem 1.4rem',
  borderRadius: '20px',
  backgroundColor: themeVars.color.grayscale[900],
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  color: themeVars.color.grayscale.white,
  cursor: 'pointer',
  ...typography.body4_rg_18,
  whiteSpace: 'nowrap',

  ':hover': {
    backgroundColor: themeVars.color.grayscale[800],
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
