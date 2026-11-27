import type { ReactNode } from 'react';

import * as styles from './description-text.css';

const LIST_ITEM = /^\s*[-*]\s+/;
const BOLD = /(\*\*[^*\n]+\*\*)/g;

/** `**글자**`만 굵게 바꾸고 나머지는 글자 그대로 둔다. 캡처 그룹으로 나눴으므로 홀수 번째 조각만 짝이 맞은 부분이다. */
const renderInline = (line: string): ReactNode[] =>
  line.split(BOLD).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className={styles.bold}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );

interface Block {
  isList: boolean;
  lines: string[];
}

/** 문단 앞뒤의 빈 줄. 목록과 문단 사이 빈 줄은 블록 구분에만 쓰고 화면에 한 줄 더 띄우지 않는다. */
const trimBlankLines = (lines: string[]): string[] => {
  const first = lines.findIndex((line) => line.trim());
  const last = lines.length - 1 - [...lines].reverse().findIndex((line) => line.trim());
  return first === -1 ? [] : lines.slice(first, last + 1);
};

/** 이어진 목록 줄(`- `·`* `로 시작)과 일반 줄을 덩어리로 묶는다. */
const toBlocks = (text: string): Block[] =>
  text
    .split('\n')
    .reduce<Block[]>((blocks, line) => {
      const isList = LIST_ITEM.test(line);
      const last = blocks.at(-1);
      if (last && last.isList === isList) {
        return [...blocks.slice(0, -1), { isList, lines: [...last.lines, line] }];
      }
      return [...blocks, { isList, lines: [line] }];
    }, [])
    .map((block) => (block.isList ? block : { ...block, lines: trimBlankLines(block.lines) }))
    .filter((block) => block.lines.length > 0);

interface DescriptionTextProps {
  text: string;
  className: string;
}

/**
 * 문항 설명. HTML로 해석하지 않고 `**굵게**`와 `- 목록` 두 가지 서식만 React 요소로 그린다.
 * 그 밖의 기호는 글자 그대로 보이고, 줄바꿈은 className의 `white-space: pre-line`으로 살린다.
 */
const DescriptionText = ({ text, className }: DescriptionTextProps) => (
  <div className={className}>
    {toBlocks(text).map((block, i) =>
      block.isList ? (
        <ul key={i} className={styles.list}>
          {block.lines.map((line, j) => (
            <li key={j}>{renderInline(line.replace(LIST_ITEM, ''))}</li>
          ))}
        </ul>
      ) : (
        <p key={i}>{renderInline(block.lines.join('\n'))}</p>
      )
    )}
  </div>
);

export default DescriptionText;
