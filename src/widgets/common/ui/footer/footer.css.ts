import { style, styleVariants } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

const MOBILE = media.mobile;

export const container = style({
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: themeVars.color.grayscale.white,
  padding: '3.3rem 4.9rem 3rem 6rem',
  '@media': {
    [MOBILE]: {
      padding: '2.4rem 2rem',
    },
  },
});

export const desktopInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '4.3rem',
  '@media': {
    [MOBILE]: {
      display: 'none',
    },
  },
});

export const mobileInner = style({
  display: 'none',
  '@media': {
    [MOBILE]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.6rem',
    },
  },
});

export const mobileContact = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

export const mobileContactLabel = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[600],
});

export const mobileSnsGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.2rem 0',
});

const colBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const col = styleVariants({
  left: [colBase, { gap: '1.5rem', flex: 1 }],
  center: [colBase, { gap: '0.8rem' }],
  right: [colBase, { gap: '0.9rem' }],
});

export const heading = style({
  ...typography.body3_bd_18,
  color: themeVars.color.grayscale.black,
});

export const snsLinks = style({
  display: 'flex',
  gap: '0.7rem',
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[400],
});

export const snsIcon = style({
  flexShrink: 0,
});

export const snsLink = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale.black,
  display: 'flex',
  alignItems: 'center',
  gap: '0.7rem',
});

export const email = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale.black,
});

export const copyright = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[400],
});

export const privacyLink = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale[400],
  textDecoration: 'underline',
});

export const logoRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2.3rem',
  flexWrap: 'wrap',
});
