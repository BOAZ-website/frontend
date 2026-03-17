import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const menuContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '25.2rem',
  alignItems: 'flex-start',
  backgroundColor: themeVars.color.grayscale[900],
  borderRadius: '1.2rem',
  boxShadow: '1rem 1rem 2rem 0 rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
});

export const dropdownItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem 1rem',
  gap: '1rem',
  alignSelf: 'stretch',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: themeVars.color.grayscale[800], 
  },
});

export const itemText = style({
  color: themeVars.color.grayscale.white,
  ...typography.body5_rg_16, 
});

export const selectedItem = style([
  dropdownItem,
  {
    ':hover': {
      backgroundColor: 'transparent',
    },
  }
]);

export const selectedText = style([
  itemText,
  {
    color: themeVars.color.primary[100], 
  }
]);