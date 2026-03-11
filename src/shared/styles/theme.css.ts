import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

import { fontSize, fontWeight, letterSpacing, lineHeight } from './font.css';

const tokens = {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
};

export const themeVars = createThemeContract(tokens);

createGlobalTheme(':root', themeVars, tokens);

createGlobalTheme(':root.dark', themeVars, {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
});
