import { HTMLAttributes} from 'react';

import './form-input.css';
  /**
   * These are custom props and can be expanded to fit the use case
   */
interface FormInputProps extends HTMLAttributes<HTMLInputElement> {

  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Form label 
   */
  label?: string;
    /**
   * Form label help text
   */
    helpText?: string;
  /**
   * Choose between a pill shaped button or traditional box shape
   */
   variant?: 'pill' | 'box',
  /**
   * Determine the color the text in the form input
   */
   color?: string;
}
/**
 * Primary UI component for user interaction
 */
export const FormInput = ({
    variant,
    size,
backgroundColor,
  ...props
}: FormInputProps) => {
  // css determines args
  return (
    <input
    className={[`storybook-form-input--${variant}`, `storybook-form-input--${size}`].join(' ')}
    style={{ backgroundColor }}
     {...props}
    />
 
  );
};