import { useState } from 'react';

import Dropdown from '@/shared/components/dropdown/dropdown';

interface DropdownFieldProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const DropdownField = ({ options, defaultValue, onChange }: DropdownFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? options[0]);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return <Dropdown options={options} value={selectedValue} onChange={handleChange} />;
};

export default DropdownField;
