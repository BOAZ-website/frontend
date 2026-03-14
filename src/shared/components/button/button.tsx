import type { RecipeVariants } from '@vanilla-extract/recipes';
import type { ComponentProps, ReactNode } from 'react';

import { button } from './button.css';

type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
type VariantType = NonNullable<ButtonVariants['variant']>;
type ColorType = NonNullable<ButtonVariants['color']>;

type ButtonPreset =
  | 'large_white'
  | 'large-round_primary'
  | 'medium_primary'
  | 'medium_white'
  | 'medium_dark'
  | 'medium-round_primary'
  | 'small-round_primary'
  | 'small-round_dark'
  | 'mini_outlined';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'className'> {
  preset: ButtonPreset;
  fullWidth?: boolean;
  children: ReactNode;
}

const Button = ({ preset, fullWidth, children, ...rest }: ButtonProps) => {
  const [variant, color] = preset.split('_') as [VariantType, ColorType];

  return (
    <button type="button" className={button({ variant, color, fullWidth })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
