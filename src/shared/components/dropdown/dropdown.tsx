import { useState } from 'react';

import * as styles from './dropdown.css';

interface DropdownProps {
  options: string[];
  onSelect?: (value: string) => void;
}

const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(options[0] ?? null);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className={styles.menuContainer}>
      {options.map((option, index) => (
        <button
          type="button"
          key={`${option}-${index}`}
          className={option === selectedValue ? styles.selectedItem : styles.dropdownItem}
          onClick={() => handleSelect(option)}
          aria-pressed={option === selectedValue}
        >
          <span className={option === selectedValue ? styles.selectedText : styles.itemText}>
            {option}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
