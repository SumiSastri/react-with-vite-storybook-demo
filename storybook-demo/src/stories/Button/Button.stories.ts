import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    primary: true,
  },
  // use the custom name for your onClick handler eg: like handleClick instead of default onClick
  argTypes: {
    onClick:{action: 'this button has been clicked'},
  },
} satisfies Meta<typeof Button>;

// export the meta data
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    size: 'small',
    variant: 'pill'
  },
};

// each of these is a react component
export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Click',
    variant: 'pill',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Save',
    backgroundColor: "#8017a6",
  },
};

export const Small: Story = {
  args: {
    primary: false,
    size: 'small',
    label: 'Next',
    backgroundColor: '#bc5480',
    color: 'white',
  },

};
