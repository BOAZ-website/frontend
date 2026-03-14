import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const button = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    border: '1px solid transparent',
    borderRadius: '10px',
    cursor: 'pointer',
    flexShrink: 0,
    transition:
      'background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out',
  },
  variants: {
    variant: {
      large: {
        ...typography.body2_bd_20,
        padding: '2.2rem 5.1rem',
      },
      'large-round': {
        ...typography.body2_bd_20,
        padding: '1.6rem 3.65rem',
        borderRadius: '40px',
      },
      medium: {
        ...typography.body2_bd_20,
        padding: '2rem 5.85rem',
      },
      'medium-round': {
        ...typography.body2_bd_20,
        padding: '2.95rem 1.65rem',
        borderRadius: '40px',
      },
      'small-round': {
        ...typography.body3_bd_18,
        padding: '1.1rem 3.35rem',
        borderRadius: '40px',
      },
      mini: {
        ...typography.text_md_22,
        gap: '0.5rem',
        padding: '0.8rem 1.3rem',
        borderRadius: '40px',
      },
    },
    color: {
      primary: {
        color: themeVars.color.grayscale.white,
        backgroundColor: themeVars.color.primary[100],
        ':hover': { backgroundColor: themeVars.color.primary[300] },
        ':disabled': {
          // 임시
          color: themeVars.color.grayscale[400],
          backgroundColor: themeVars.color.grayscale[100],
          cursor: 'not-allowed',
        },
      },
      outlined: {
        color: themeVars.color.grayscale.white,
        backgroundColor: 'transparent',
        border: `1px solid ${themeVars.color.grayscale.white}`,
        ':hover': {
          backgroundColor: themeVars.color.grayscale[900],
        },
      },
      white: {
        color: themeVars.color.grayscale.black,
        backgroundColor: themeVars.color.grayscale.white,
        ':hover': { backgroundColor: themeVars.color.grayscale[100] },
        ':disabled': {
          backgroundColor: themeVars.color.grayscale[800],
          cursor: 'not-allowed',
        },
      },
      dark: {
        color: themeVars.color.grayscale.white,
        backgroundColor: themeVars.color.grayscale[800],
        ':hover': { backgroundColor: themeVars.color.grayscale[900] },
        ':active': { backgroundColor: themeVars.color.grayscale[950] },
        ':disabled': {
          color: themeVars.color.grayscale[400],
          backgroundColor: themeVars.color.grayscale[100],
          cursor: 'not-allowed',
        },
      },
    },
    fullWidth: {
      true: { width: '100%' },
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'small-round', color: 'dark' },
      style: { padding: '1.2rem 5rem' },
    },
  ],
});
