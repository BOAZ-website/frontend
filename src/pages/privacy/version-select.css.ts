import { style } from '@vanilla-extract/css';

import { media } from '@/shared/styles/breakpoints';

import * as filterStyles from '@/widgets/archive/ui/generation-filter/generation-filter.css';

// 아카이브 '기수' 필터와 같은 모양을 쓰고, 목록이 버튼 바로 아래(오른쪽 끝 맞춤)에 열리게만 바꾼다.
export const { container, backdrop, trigger, chevronIcon, option } = filterStyles;

export const overlay = style([
  filterStyles.overlay,
  {
    top: 'calc(100% + 0.8rem)',
    alignItems: 'stretch',
    '@media': {
      [media.mobile]: {
        top: 'calc(100% + 0.8rem)',
      },
    },
  },
]);
