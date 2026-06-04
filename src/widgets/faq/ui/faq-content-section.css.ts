import { style, styleVariants } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const mainLayout = style({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  '@media': {
    [media.mobile]: {
      flexDirection: 'column',
      gap: '4.6rem',
    },
  },
});

export const sideNavigation = style({
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  '@media': {
    [media.mobile]: {
      flexDirection: 'row',
      width: '100%',
    },
  },
});

const tabBase = style({
  textAlign: 'left',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  padding: '2.9rem 13.3rem 2.9rem 1.6rem',
  '@media': {
    [media.mobile]: {
      flex: '1',
      textAlign: 'center',
      padding: '1.5rem 2.4rem',
      borderBottom: '2px solid transparent',
    },
  },
});

export const tabVariants = styleVariants({
  active: [
    tabBase,
    {
      ...typography.h4_bd_24,
      color: themeVars.color.grayscale.white,
      '@media': {
        [media.mobile]: {
          ...typography.body3_bd_18,
          borderBottomColor: themeVars.color.grayscale.white,
        },
      },
    },
  ],
  default: [
    tabBase,
    {
      ...typography.h4_bd_24,
      color: themeVars.color.grayscale[400],
      '@media': {
        [media.mobile]: {
          ...typography.body3_bd_18,
        },
      },
    },
  ],
});

export const listSection = style({
  flex: 1,
});

export const accordionContainer = style({
  display: 'flex',
  flexDirection: 'column',
});
