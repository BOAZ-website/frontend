import type { RecipeVariants } from '@vanilla-extract/recipes';
import clsx from 'clsx';
import type { ComponentProps, ReactNode } from 'react';

import { button } from './button.css';
import { glassEffect } from './glass.css';

type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
type VariantType = NonNullable<ButtonVariants['variant']>;
type ColorType = NonNullable<ButtonVariants['color']>;

type ButtonPreset =
  | 'large_white'
  | 'large-round_primary'
  | 'medium_primary'
  | 'medium_white'
  | 'medium-icon_white'
  | 'medium-round_primary'
  | 'small-round_primary'
  | 'small-round_glass'
  | 'mini_outlined';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'className'> {
  preset: ButtonPreset;
  hasIcon?: boolean;
  children: ReactNode;
}

const Button = ({ preset, hasIcon, children, ...rest }: ButtonProps) => {
  const [variant, color] = preset.split('_') as [VariantType, ColorType];

  return (
    <button
      type="button"
      className={clsx(button({ variant, color, hasIcon }), color === 'glass' && glassEffect)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
