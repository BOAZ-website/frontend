import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const wrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1px 1fr',
  gridTemplateRows: 'auto auto',
  width: '100%',
  marginBottom: '8.7rem',
  '@media': {
    [media.mobile]: {
      marginBottom: '4rem',
    },
  },
});

export const baseLabel = style({
  gridColumn: '1',
  gridRow: '1',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  paddingRight: '5rem',
  textAlign: 'right',
  '@media': {
    [media.mobile]: {
      paddingRight: '1.6rem',
    },
  },
});

export const baseStepList = style({
  gridColumn: '3',
  gridRow: '1',
  display: 'flex',
  flexDirection: 'column',
  gap: '5.5rem',
  paddingLeft: '5rem',
  paddingBottom: '10rem',
  '@media': {
    [media.mobile]: {
      paddingLeft: '1.6rem',
      paddingBottom: '4rem',
      gap: '3rem',
    },
  },
});

export const divider = style({
  gridColumn: '2',
  gridRow: '1 / 3',
  width: '1px',
  background: `linear-gradient(to top, ${themeVars.color.grayscale.white}, transparent)`,
  maskImage:
    'repeating-linear-gradient(to top, black 0px, black 4px, transparent 4px, transparent 8px)',
  WebkitMaskImage:
    'repeating-linear-gradient(to top, black 0px, black 4px, transparent 4px, transparent 8px)',
});

export const semesterStepList = style({
  gridColumn: '1',
  gridRow: '2',
  display: 'flex',
  flexDirection: 'column',
  gap: '5.5rem',
  alignItems: 'flex-end',
  paddingRight: '5rem',
  '@media': {
    [media.mobile]: {
      paddingRight: '1.6rem',
      gap: '3rem',
    },
  },
});

export const semesterLabel = style({
  gridColumn: '3',
  gridRow: '2',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft: '5rem',
  '@media': {
    [media.mobile]: {
      paddingLeft: '1.6rem',
    },
  },
});

export const sessionLabelText = style({
  ...typography.h1_sb_40,
  color: themeVars.color.grayscale.white,
  lineHeight: '1.5',
  whiteSpace: 'nowrap',
  '@media': {
    [media.mobile]: {
      ...typography.h4_bd_24,
    },
  },
});

export const stepList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5.5rem',
});
