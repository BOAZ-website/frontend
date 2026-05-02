import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, ComponentProps } from 'react';

import WarningIcon from '@/shared/assets/icons/ic_warning.svg?react';

import TextCounter from '../textfield/text-counter';
import TextField from '../textfield/textfield';

import * as styles from './textfield-with-counter.css';

interface TextFieldWithCounterProps extends Omit<
  ComponentProps<'textarea'>,
  'className' | 'maxLength'
> {
  maxLength: number;
}

const TextFieldWithCounter = ({
  maxLength,
  value: externalValue,
  onChange: externalOnChange,
  ...textareaProps
}: TextFieldWithCounterProps) => {
  const isControlled = externalValue !== undefined;
  const [internalValue, setInternalValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const value = isControlled ? String(externalValue) : internalValue;
  const isOverLimit = value.length > maxLength;
  const isCompleted = value.length > 0 && !isOverLimit;

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    externalOnChange?.(e);
  };

  return (
    <div className={styles.textFieldWithCounterWrapper}>
      <TextField
        {...textareaProps}
        ref={textareaRef}
        value={value}
        isError={isOverLimit}
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
          isError={isOverLimit}
          isCompleted={isCompleted}
        />
      </div>
    </div>
  );
};

export default TextFieldWithCounter;
