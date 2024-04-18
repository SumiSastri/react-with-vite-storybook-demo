import { HTMLAttributes, ReactNode } from 'react';

import './button.css';
  /**
   * These are custom props and can be expanded to fit the use case
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
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Optional child elements
   */
  children?: ReactNode;
  /**
   * Choose between a pill shaped button or traditional box shape
   */
   variant?: 'pill' | 'box',
  /**
   * Determine the color of your text in the box
   */
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
  children,
  color,
  ...props
}: ButtonProps) => {
  // css from the css files define primary or secondary color
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      // dynamic variants
      className={[`storybook-button--${variant}`, `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
      color={color}
  
    >
    {label}
    {children}
    </button>
  );
};
