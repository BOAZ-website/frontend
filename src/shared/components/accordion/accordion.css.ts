import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { ACCORDION_DURATION_MS } from '@/shared/hooks/use-accordion';
import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

const TRANSITION = `${ACCORDION_DURATION_MS}ms ease`;

export const itemStyle = style({
  width: '100%',
  borderBottom: `0.5px solid ${themeVars.color.grayscale[400]}`,
});

export const questionStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '1.2rem',
  padding: '3.9rem 2.4rem 3.9rem 0',
  color: themeVars.color.grayscale.white,
  '@media': {
    [media.mobile]: {
      padding: '2.5rem 0',
    },
  },
});

export const questionText = recipe({
  base: {
    ...typography.body3_bd_18,
    flex: 1,
    textAlign: 'left',
    color: themeVars.color.grayscale.white,
    transition: `color ${TRANSITION}`,
    '@media': {
      [media.mobile]: {
        ...typography.body5_rg_16,
        alignSelf: 'flex-start',
        textAlign: 'left',
      },
    },
  },
  variants: {
    open: {
      true: { color: themeVars.color.primary[100] },
    },
  },
  defaultVariants: { open: false },
});

export const answerWrapper = recipe({
  base: {
    display: 'grid',
    transition: `grid-template-rows ${TRANSITION}`,
  },
  variants: {
    open: {
      true: { gridTemplateRows: '1fr' },
      false: { gridTemplateRows: '0fr' },
    },
  },
  defaultVariants: { open: false },
});

export const answerInner = style({
  minHeight: 0,
  overflow: 'hidden',
});

export const answerContent = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale.white,
  padding: '3.5rem 0 3.5rem 2.4rem',
  lineHeight: '1.6',
  '@media': {
    [media.mobile]: {
      ...typography.body5_rg_16,
      lineHeight: '1.2',
      padding: '3.3rem 0',
    },
  },
});
