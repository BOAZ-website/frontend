import { useState } from 'react';

import Dropdown from '@/shared/components/dropdown/dropdown';

interface DropdownFieldProps {
  label: string;
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  isError?: boolean;
}

const DropdownField = ({ label, options, defaultValue, onChange, isError }: DropdownFieldProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? '');

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <Dropdown
      options={options}
      value={selectedValue}
      placeholder={label}
      onChange={handleChange}
      isError={isError}
    />
  );
};

export default DropdownField;
