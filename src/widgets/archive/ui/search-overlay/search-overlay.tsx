import { useRef } from 'react';

import SearchIcon from '@/shared/assets/icons/ic_search.svg?react';

import * as styles from './search-overlay.css';

interface SearchOverlayProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchOverlay = ({ value, onChange, placeholder = '검색' }: SearchOverlayProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container} onClick={() => inputRef.current?.focus()}>
      <SearchIcon className={styles.icon} />
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchOverlay;
