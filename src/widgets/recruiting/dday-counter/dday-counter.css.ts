import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const dDay = style({
  color: themeVars.color.primary[100],
  ...typography.display2_bd_72,
});
