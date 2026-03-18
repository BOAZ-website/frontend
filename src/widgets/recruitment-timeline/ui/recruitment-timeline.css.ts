import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

const DATE_LABEL_HEIGHT = '2.4rem'; // body1_rg_24 line-height
const DATE_LABEL_MB = '4.3rem'; // dateLabel marginBottom
const DOT_HALF = '2rem'; // timelineDot height 4rem / 2
const OFFSET = '1rem'; // timelineDot border 10px / 2

export const wrapper = style({
  position: 'relative',
  maxWidth: '101.6rem',
  width: '100%',

  '::before': {
    content: '""',
    position: 'absolute',
    top: `calc(${DATE_LABEL_HEIGHT} + ${DATE_LABEL_MB} + ${DOT_HALF} + ${OFFSET})`,
    left: 0,
    right: 0,
    height: '0.2rem',
    background: `linear-gradient(
    to right,
    transparent 0%,
    ${themeVars.color.grayscale[100]} 45%,
    ${themeVars.color.grayscale.white} 50%,
    ${themeVars.color.grayscale[100]} 65%,
    transparent 100%
  )`,
    zIndex: 1,
  },
});

export const track = style({
  display: 'flex',
  gap: '2.9rem',
  position: 'relative',
  overflowX: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
