import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import { themeVars } from '@/shared/styles/theme.css';

export const page = style({
  padding: '48px 40px 120px',
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
  maxWidth: '1280px',
  margin: '0 auto',
});

export const pageHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  borderBottom: `1px solid ${themeVars.color.grayscale[800]}`,
  paddingBottom: '24px',
});

export const pageTitle = style({
  fontSize: '28px',
  fontWeight: 700,
});

export const pageSubtitle = style({
  fontSize: '14px',
  color: themeVars.color.grayscale[400],
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const sectionTitle = style({
  fontSize: '18px',
  fontWeight: 700,
});

export const sectionDesc = style({
  fontSize: '13px',
  color: themeVars.color.grayscale[400],
  lineHeight: 1.6,
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
  gap: '16px',
  '@media': {
    [media.mobile]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '20px',
  borderRadius: '12px',
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  backgroundColor: themeVars.color.grayscale[950],
});

export const presetLabel = style({
  fontSize: '13px',
  fontFamily: 'monospace',
  color: themeVars.color.sub.lightblue_100,
  wordBreak: 'break-all',
});

export const demoArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 0',
  minHeight: '64px',
});

export const meta = style({
  fontSize: '12px',
  color: themeVars.color.grayscale[600],
});

export const warning = style({
  fontSize: '12px',
  color: themeVars.color.error.red_100,
});

export const pairRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'flex-start',
});

export const stateRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '32px',
});

export const stateGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '20px',
  borderRadius: '12px',
  border: `1px solid ${themeVars.color.grayscale[800]}`,
  backgroundColor: themeVars.color.grayscale[950],
  minWidth: '220px',
});

export const stateGroupTitle = style({
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  color: themeVars.color.grayscale[300],
});

export const stateItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const stateItemLabel = style({
  fontSize: '12px',
  color: themeVars.color.grayscale[400],
  width: '56px',
  flexShrink: 0,
});

export const hexChip = style({
  fontSize: '12px',
  fontFamily: 'monospace',
  color: themeVars.color.grayscale[300],
  padding: '4px 8px',
  borderRadius: '6px',
  backgroundColor: themeVars.color.grayscale[900],
});
