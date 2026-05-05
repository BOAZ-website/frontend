import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';
import { typography } from '@/shared/styles/typography.css';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '33.3rem',
  height: '35rem',
  borderRadius: '2rem',
  borderColor: themeVars.color.grayscale[800],
  backgroundColor: themeVars.color.grayscale[900],
  padding: '2rem 2.1rem 2.1rem 2.1rem',
  border: '1px solid transparent',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  selectors: {
    [`&:hover`]: {
      borderRadius: '2rem',
      borderColor: themeVars.color.primary[100],
      transform: 'translateY(-0.2rem)',

      background: `
        linear-gradient(180deg, rgba(102, 102, 102, 0.00) 0%, rgba(100, 152, 249, 0.20) 100%), 
        linear-gradient(180deg, rgba(122, 100, 249, 0.20) 0%, rgba(153, 153, 153, 0.00) 100%), 
        #0A0A0A
      `,
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
    },
  },
});

export const imageSection = style({
  width: '100%',
  height: '16.5rem',
  borderRadius: '1.6rem',
  backgroundColor: themeVars.color.grayscale.white,
  overflow: 'hidden',
  flexShrink: 0,
});

export const cardImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const contentSection = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  paddingTop: '1.6rem',
});

export const subTitle = style({
  color: themeVars.color.grayscale[100],
  ...typography.body4_rg_18,
  marginBottom: '0.4rem',
});

export const title = style({
  color: themeVars.color.grayscale.white,
  ...typography.body1_rg_24,
  height: '6.4rem',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  marginBottom: '1rem',
});

export const bottomInfo = style({
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const tagContainer = style({
  display: 'flex',
  gap: '0.6rem',
});

export const iconContainer = style({
  display: 'flex',
  gap: '1.2rem',
  alignItems: 'center',
});

export const iconItem = style({
  width: '2.4rem',
  height: '2.4rem',
  color: themeVars.color.grayscale[400],
  transition: 'color 0.2s',
  selectors: {
    [`&:hover`]: { color: themeVars.color.grayscale.white },
  },
});

export const tagButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  cursor: 'pointer',
  ...typography.text_rg_14,
  padding: '0.45rem 1.2rem',

  color: themeVars.color.grayscale[100],
  backgroundColor: 'transparent',
  border: `1px solid ${themeVars.color.grayscale[400]}`,
});
