import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const textFieldRecipe = recipe({
  base: {
    width: '100%',
    padding: '1rem 0',
    backgroundColor: 'transparent',
    color: themeVars.color.grayscale[100],
    ...typography.body4_rg_18,
    border: 'none',
    borderBottom: `1px solid ${themeVars.color.grayscale[400]}`,
    resize: 'none',
    alignContent: 'center',

    '::placeholder': {
      color: themeVars.color.grayscale[400],
    },

    ':focus': {
      outline: 'none',
      borderColor: themeVars.color.primary[100],
    },
  },

  variants: {
    error: {
      true: {
        borderColor: themeVars.color.error.red_100,

        ':focus': {
          borderColor: themeVars.color.error.red_100,
        },
      },
    },
  },
});
