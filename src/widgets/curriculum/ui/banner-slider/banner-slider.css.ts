import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const wrapper = style({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  userSelect: 'none',
});

export const track = style({
  display: 'flex',
  transition: 'transform 0.6s ease',
});

export const slide = style({
  flexShrink: 0,
  width: '100%',
});

export const image = style({
  width: '100%',
  height: '33rem',
  objectFit: 'cover',
  display: 'block',
  pointerEvents: 'none',
});

export const dotsWrapper = style({
  position: 'absolute',
  flexDirection: 'column',
  bottom: '14rem',
  right: '9rem',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '0.5rem',
});

export const dot = style({
  width: '0.6rem',
  height: '0.6rem',
  borderRadius: '50%',
  backgroundColor: '#D9D9D9',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'background-color 0.3s ease',
});

export const dotActive = style({
  backgroundColor: themeVars.color.grayscale.black,
});
