import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  // 1. Layout Group
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  // 2. Box Group
  width: '100%',
  height: '6.4rem',
  padding: '2.5em',

  // 3. Typography Group
  backgroundColor: themeVars.color.grayscale.black,
});

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1440rem',
  padding: '0 4rem',

  color: themeVars.color.grayscale.white,

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '0 1rem',
    },
  },
});

export const logoImage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
});

export const leftGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10rem',
});

export const logoSection = style({
  display: 'flex',
  alignItems: 'center',
  color: themeVars.color.grayscale.white,
  ...typography.body5_rg_16,

  gap: '0.5rem',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      fontWeight: themeVars.fontWeight.semibold,
    },
  },
});

export const navList = style({
  display: 'flex',
  gap: '10rem',
});

export const navItem = style({
  fontSize: '1.5rem',
  cursor: 'pointer',
});

export const applyButton = style({
  // 1. Layout Group
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem 2.5rem',

  // 2. Box Group
  borderRadius: '2.5rem',
  border: '1px solid rgba(255, 255, 255, 0.4)',

  color: themeVars.color.grayscale.white,
  ...typography.body3_bd_18,

  fontSize: '1.25rem',
  fontWeight: '600',
  lineHeight: '1',
  cursor: 'pointer',
  transition: 'all 0.3s ease',

  selectors: {
    '&:hover': {
      transform: 'translateY(-2px)',
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
    },
  },
});
