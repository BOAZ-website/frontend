import type { ComponentProps } from 'react';

import * as styles from './textfield.css';

interface TextFieldProps extends Omit<ComponentProps<'textarea'>, 'className'> {
  isError?: boolean;
  isCompleted?: boolean;
}

export const TextField = ({
  isError = false,
  isCompleted = false,
  ...textareaProps
}: TextFieldProps) => {
  return (
    <textarea
      className={styles.textFieldRecipe({ error: isError, completed: isCompleted })}
      {...textareaProps}
    />
  );
};

export default TextField;
