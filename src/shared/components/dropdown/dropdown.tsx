import { useState } from 'react';
import * as styles from './dropdown.css';

interface DropdownProps {
  options: string[];
  onSelect?: (value: string) => void;
}

const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>('4월');

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className={styles.menuContainer}>
      {options.map((option) => (
        <div
          key={option}
          className={option === selectedValue ? styles.selectedItem : styles.dropdownItem}
          onClick={() => handleSelect(option)}>
          <span className={option === selectedValue ? styles.selectedText : styles.itemText}>
            {option}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;