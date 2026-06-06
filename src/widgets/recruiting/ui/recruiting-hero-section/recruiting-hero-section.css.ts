import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

const COLOR_BG1 = 'rgb(72, 22, 132)';
const COLOR_BG2 = 'rgb(4, 18, 78)';

export const container = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  background: `linear-gradient(40deg, ${COLOR_BG1}, ${COLOR_BG2})`,
});

export const content = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '2.4rem',
});

export const title = style({
  ...typography.display2_bd_72,
  fontFamily: themeVars.fontFamily.paperlogy,
  color: themeVars.color.grayscale.white,
  margin: 0,
});

export const description = style({
  ...typography.body4_rg_18,
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: '1.6',
  margin: 0,
});
