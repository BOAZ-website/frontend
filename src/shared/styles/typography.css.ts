import { themeVars } from './theme.css';

// 네이밍 규칙: {역할}_{weight}_{size}
// weight: rg(regular), md(medium), sb(semibold), bd(bold)
export const typography = {
  // Display
  display1_bd_80: {
    fontSize: themeVars.fontSize[80],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  display2_bd_72: {
    fontSize: themeVars.fontSize[72],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },

  // Heading
  h1_bd_40: {
    fontSize: themeVars.fontSize[40],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  h1_sb_40: {
    fontSize: themeVars.fontSize[40],
    fontWeight: themeVars.fontWeight.semibold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  h1_md_40: {
    fontSize: themeVars.fontSize[40],
    fontWeight: themeVars.fontWeight.medium,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  h2_bd_30: {
    fontSize: themeVars.fontSize[30],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  h3_sb_30: {
    fontSize: themeVars.fontSize[30],
    fontWeight: themeVars.fontWeight.semibold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  h4_bd_24: {
    fontSize: themeVars.fontSize[24],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  h5_bd_16: {
    fontSize: themeVars.fontSize[16],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },

  // Body
  body1_rg_24: {
    fontSize: themeVars.fontSize[24],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body2_bd_20: {
    fontSize: themeVars.fontSize[20],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body2_rg_20: {
    fontSize: themeVars.fontSize[20],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body3_bd_18: {
    fontSize: themeVars.fontSize[18],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body4_rg_18: {
    fontSize: themeVars.fontSize[18],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body4_rg_18_card: {
    fontSize: themeVars.fontSize[18],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.card,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body5_bd_12: {
    fontSize: themeVars.fontSize[12],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body5_rg_16: {
    fontSize: themeVars.fontSize[16],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body6_rg_12: {
    fontSize: themeVars.fontSize[12],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body6_bd_10: {
    fontSize: themeVars.fontSize[10],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  body6_rg_10: {
    fontSize: themeVars.fontSize[10],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  // Text
  text_md_22: {
    fontSize: themeVars.fontSize[22],
    fontWeight: themeVars.fontWeight.medium,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  text_rg_20: {
    fontSize: themeVars.fontSize[20],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  text_rg_14: {
    fontSize: themeVars.fontSize[14],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  text_bd_8: {
    fontSize: themeVars.fontSize[8],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
  text_rg_8: {
    fontSize: themeVars.fontSize[8],
    fontWeight: themeVars.fontWeight.regular,
    lineHeight: themeVars.lineHeight.tight,
    letterSpacing: themeVars.letterSpacing.normal,
  },
} as const;
