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
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

// export the meta data
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: false,
    label: 'Button',
    size: 'small',
    variant: 'pill'
  },
};

export const Secondary: Story = {
  args: {
    primary:true,
    label: 'Click',
    variant: 'pill',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Save',
    color: 'white',
    backgroundColor: "#8017a6",
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Next',
    backgroundColor: '#bc5480',
    color: 'white',
  },

};
