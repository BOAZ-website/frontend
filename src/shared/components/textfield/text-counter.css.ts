import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const textCounterRecipe = recipe({
  base: {
    ...typography.text_rg_14,
    color: themeVars.color.grayscale[400],
    display: 'flex-end',
    alignContent: 'center',

    ':focus': {
      color: themeVars.color.primary[100],
    },
  },

  variants: {
    error: {
      true: {
        color: themeVars.color.error.red_100,

        ':focus': {
          color: themeVars.color.error.red_100,
        },
      },
    },
  },
});
