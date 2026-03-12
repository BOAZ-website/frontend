import { themeVars } from './theme.css';

// 네이밍 규칙: {역할}_{weight}_{size}
// weight: rg(regular), md(medium), sb(semibold), bd(bold)
export const typography = {
  // Display
  display_bd_72: {
    fontSize: themeVars.fontSize[72],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },

  // Heading
  h1_bd_40: {
    fontSize: themeVars.fontSize[40],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  h1_sb_40: {
    fontSize: themeVars.fontSize[40],
    fontWeight: themeVars.fontWeight.semibold,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  h2_bd_30: {
    fontSize: themeVars.fontSize[30],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  h3_bd_24: {
    fontSize: themeVars.fontSize[24],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },

  // Body
  body1_rg_24: {
    fontSize: themeVars.fontSize[24],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body2_bd_20: {
    fontSize: themeVars.fontSize[18],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body3_bd_18: {
    fontSize: themeVars.fontSize[18],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body4_rg_18: {
    fontSize: themeVars.fontSize[18],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
  body5_rg_16: {
    fontSize: themeVars.fontSize[16],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },

  // Text
  text1_rg_14: {
    fontSize: themeVars.fontSize[14],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.normal,
    letterSpacing: themeVars.letterSpacing.tight,
  },
} as const;
