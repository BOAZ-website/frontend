import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { lightColors } from './color.css';
import { fontSize, fontWeight, letterSpacing, lineHeight } from './font.css';
import { radius } from './radius.css';

const baseTokens = { fontSize, fontWeight, lineHeight, letterSpacing, radius };

export const themeVars = createThemeContract({
  color: lightColors,
  ...baseTokens,
});

// 라이트모드
createGlobalTheme(':root', themeVars, {
  color: lightColors,
  ...baseTokens,
});

{
  /* 다크모드
createGlobalTheme(':root.dark', themeVars, {
  color: darkColors,
  ...baseTokens,
});
*/
}
