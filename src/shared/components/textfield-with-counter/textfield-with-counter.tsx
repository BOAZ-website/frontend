import { useState } from 'react';
import type { ChangeEvent, ComponentProps } from 'react';

import WarningIcon from '@/shared/assets/icons/ic_warning.svg?react';

import TextCounter from '../textfield/text-counter';
import TextField from '../textfield/textfield';

import * as styles from './textfield-with-counter.css';

interface TextFieldWithCounterProps extends Omit<
  ComponentProps<'textarea'>,
  'className' | 'maxLength' | 'onChange' | 'defaultValue'
> {
  maxLength: number;
  defaultValue?: string;
  isError?: boolean;
  onChange?: (value: string) => void;
}

const TextFieldWithCounter = ({
  maxLength,
  isError = false,
  onChange,
  defaultValue = '',
  ...textareaProps
}: TextFieldWithCounterProps) => {
  const [value, setValue] = useState(defaultValue);

  const isOverLimit = value.length > maxLength;
  const hasError = isError || isOverLimit;
  const isCompleted = value.length > 0 && !hasError;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={styles.textFieldWithCounterWrapper}>
      <TextField
        {...textareaProps}
        value={value}
        isError={hasError}
        isCompleted={isCompleted}
        onChange={handleChange}
      />
      <div className={styles.fieldBottom}>
        <p className={styles.errorMessage}>
          {isOverLimit && (
            <>
              <WarningIcon width={16} height={16} />
              <span>글자 수 제한을 초과했습니다</span>
            </>
          )}
        </p>
        <TextCounter
          currentLength={value.length}
          maxLength={maxLength}
          isError={hasError}
          isCompleted={isCompleted}
        />
      </div>
    </div>
  );
};

export default TextFieldWithCounter;
