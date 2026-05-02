import RadioButton from './radio-button';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value: string | null;
  onChange: (value: string | null) => void;
  className?: string;
}

const RadioGroup = ({ name, options, value, onChange, className }: RadioGroupProps) => {
  const handleChange = (selectedValue: string) => {
    const nextValue = value === selectedValue ? null : selectedValue;
    onChange(nextValue);
  };

  return (
    <div className={className}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          name={name}
          label={option.label}
          value={option.value}
          checked={value === option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
