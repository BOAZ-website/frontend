import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { darkColors } from './color.css';
// import { lightColors } from './color.css';
import { fontSize, fontWeight, letterSpacing, lineHeight } from './font.css';
import { radius } from './radius.css';
import { zIndex } from './zIndex.css';

const baseTokens = { fontSize, fontWeight, lineHeight, letterSpacing, radius, zIndex };

export const themeVars = createThemeContract({
  color: darkColors,
  ...baseTokens,
});

// 다크모드
createGlobalTheme(':root', themeVars, {
  color: darkColors,
  ...baseTokens,
});

/* 라이트모드 — lightColors 완성 시 주석 해제
 createGlobalTheme(':root.light', themeVars, {
   color: lightColors,
   ...baseTokens,
 });
*/
