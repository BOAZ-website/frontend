import { useState } from 'react';

import Dropdown from '@/shared/components/dropdown/dropdown';

interface DropdownFieldProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const DropdownField = ({ label, options, defaultValue, onChange }: DropdownFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? '');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <Dropdown options={options} value={selectedValue} placeholder={label} onChange={handleChange} />
  );
};

export default DropdownField;
