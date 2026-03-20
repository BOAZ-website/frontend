import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

const TRANSITION_DURATION = '300ms';

export const itemStyle = style({
  borderBottom: `0.5px solid ${themeVars.color.grayscale[400]}`,
});

export const questionStyle = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '3.9rem 2.4rem 3.9rem 0',
  color: themeVars.color.grayscale.white,
});

export const questionText = recipe({
  base: {
    ...typography.body3_bd_18,
    transition: `color ${TRANSITION_DURATION} ease`,
  },
  variants: {
    open: {
      true: { color: themeVars.color.primary[100] },
      false: {},
    },
  },
});

export const answerWrapper = recipe({
  base: {
    overflow: 'hidden',
    maxHeight: 0,
    transition: `max-height ${TRANSITION_DURATION} ease`,
  },
  variants: {
    open: {
      true: { maxHeight: 'var(--accordion-content-height)' },
      false: {},
    },
  },
});

export const answerContent = style({
  ...typography.body5_rg_16,
  color: themeVars.color.grayscale.white,
  padding: '3.5rem 0 3.5rem 2.4rem',
});
