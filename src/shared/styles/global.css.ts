import { globalStyle } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

globalStyle('html', {
  fontSize: '62.5%',
  width: '100%',
  height: '100dvh',
  wordBreak: 'keep-all',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('html, body', {
  height: '100%',
});

globalStyle('body', {
  fontFamily: "'Pretendard Variable', Pretendard, sans-serif",
  WebkitFontSmoothing: 'antialiased',

  // 다크모드 테마 기본값
  backgroundColor: themeVars.color.grayscale.black,
  color: themeVars.color.grayscale.white,
  transition: 'background-color 0.3s ease, color 0.3s ease',
});

globalStyle('#root', {
  width: '100%',
  height: '100dvh',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('ul, ol', {
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

globalStyle('button , input', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  outline: 'none',
});
