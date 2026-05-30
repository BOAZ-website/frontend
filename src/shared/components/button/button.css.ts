import { recipe } from '@vanilla-extract/recipes';

import { media } from '@/shared/styles/breakpoints';

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
      wide: {
        ...typography.h4_bd_24,
        padding: '1.95rem 0',
        width: '100%',
      },
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
        padding: '2.2rem 6.5rem',
      },
      'medium-round': {
        ...typography.body2_bd_20,
        padding: '1.6rem 3.8rem',
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
          color: themeVars.color.grayscale.white,
          backgroundColor: themeVars.color.grayscale[400],
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
      glass: {
        color: themeVars.color.grayscale.white,
        ':hover': { backgroundColor: 'rgba(208, 207, 249, 0.20)' },
      },
    },
    hasIcon: {
      true: {},
    },
    responsive: {
      true: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'medium', hasIcon: true },
      style: { padding: '2.2rem 3.7rem' },
    },
    {
      variants: { variant: 'small-round', hasIcon: true },
      style: { padding: '1rem 1.6rem', border: `0.5px solid ${themeVars.color.grayscale.white}` },
    },
    {
      variants: { variant: 'small-round', color: 'glass' },
      style: { padding: '1.15rem 5rem' },
    },
    {
      variants: { variant: 'medium', responsive: true },
      style: {
        '@media': {
          [media.mobile]: {
            ...typography.body3_bd_18,
            padding: '0.9rem 2.2rem',
            borderRadius: '4px',
            width: '100%',
          },
        },
      },
    },
    // medium + hasIcon + responsive: 아이콘 있을 때 mobile 크기 축소
    {
      variants: { variant: 'medium', hasIcon: true, responsive: true },
      style: {
        '@media': {
          [media.mobile]: {
            ...typography.text_bd_8,
            padding: '0.9rem 2.2rem',
            borderRadius: '4px',
            width: '100%',
          },
        },
      },
    },
    {
      variants: { variant: 'medium-round', responsive: true },
      style: {
        '@media': {
          [media.mobile]: {
            ...typography.body6_rg_10,
            padding: '0.8rem 1.6rem',
          },
        },
      },
    },
    {
      variants: { variant: 'small-round', responsive: true },
      style: {
        '@media': {
          [media.mobile]: {
            ...typography.h5_bd_16,
            padding: '0.9rem 2.9rem',
          },
        },
      },
    },
  ],
});
