import { HTMLAttributes, ReactNode } from 'react';

import './button.css';
  /**
   * Create your own custom props and their types
   */
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
    /**
   * Optional child elements
   */
  children?: ReactNode;

   variant?: 'pill' | 'box',

   color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size,
  backgroundColor,
  label,
  variant,
  color,
  ...props
}: ButtonProps) => {
  // css from the css files define primary or secondary color
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={[`storybook-button--${variant}`, `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
      color={color}
    >
      {label}
    </button>
  );
};
