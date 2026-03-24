import { style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const container = style({
  position: 'relative',
  width: '100%',
  maxWidth: '25.2rem',
});

export const trigger = style({
  width: '100%',
  padding: '1.2rem 1.6rem',
  borderRadius: '0.8rem',
  backgroundColor: themeVars.color.grayscale[800],
  color: themeVars.color.grayscale.white,
  textAlign: 'left',
  cursor: 'pointer',
  border: 'none',
  ...typography.body5_rg_16,
});

export const menuContainer = style({
  display: 'flex',
  position: 'absolute',
  top: 'calc(100% + 0.8rem)',
  zIndex: 100,
  flexDirection: 'column',
  width: '100%',
  maxHeight: '24.5rem',
  overflowY: 'auto',
  overflowX: 'hidden',
  backgroundColor: themeVars.color.grayscale[900],
  borderRadius: '1.2rem',
  boxShadow: '1rem 1rem 2rem 0 rgba(0, 0, 0, 0.25)',

  '::-webkit-scrollbar': { width: '0.6rem' },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: themeVars.color.grayscale[400],
    borderRadius: '1rem',
  },
});

const itemBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 1rem',
  gap: '1rem',
  alignSelf: 'stretch',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  flexShrink: 0,
  border: 'none',
  backgroundColor: 'transparent',
  ...typography.body5_rg_16,
});

export const itemVariants = styleVariants({
  default: [
    itemBase,
    {
      color: themeVars.color.grayscale.white,
      ':hover': {
        backgroundColor: themeVars.color.grayscale[800],
      },
    },
  ],
  selected: [
    itemBase,
    {
      color: themeVars.color.primary[100],
      ':hover': {
        backgroundColor: 'transparent',
      },
    },
  ],
});
