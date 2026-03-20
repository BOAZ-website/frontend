import { useState } from 'react';

import * as styles from './dropdown.css';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button type="button" className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        {value}
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
