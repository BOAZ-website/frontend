export const breakpoints = {
  mobile: '768px',
  desktop: '1366px',
} as const;

export const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  desktop: `screen and (min-width: ${breakpoints.desktop})`,
} as const;
