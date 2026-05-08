import type { ComponentProps } from 'react';

import * as styles from './tag.css';

type TagProps = ComponentProps<'span'>;

const Tag = ({ children, ...rest }: TagProps) => {
  return (
    <span className={styles.tag} {...rest}>
      {children}
    </span>
  );
};

export default Tag;
