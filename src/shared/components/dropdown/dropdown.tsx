import { useEffect, useRef, useState } from 'react';

import * as styles from './dropdown.css';

interface DropdownProps {
  options: string[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  isError?: boolean;
}

const Dropdown = ({ options, value, placeholder, onChange, isError }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEmpty = value === '';
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={isError ? styles.containerError : styles.container}>
      <button
        type="button"
        className={`${styles.trigger}${isEmpty ? ` ${styles.triggerPlaceholder}` : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isEmpty ? placeholder : value}
      </button>
      {isOpen && (
        <div className={styles.menuContainer}>
          {options.map((option) => (
            <button
              type="button"
              key={option}
              className={styles.itemVariants[option === value ? 'selected' : 'default']}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
