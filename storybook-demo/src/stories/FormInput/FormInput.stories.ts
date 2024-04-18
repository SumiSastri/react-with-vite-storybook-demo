import type { Meta, StoryObj } from '@storybook/react';
import { FormInput } from './FormInput';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/FormInput',
  component: FormInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    size: "medium",
    variant:'pill',
  },
} satisfies Meta<typeof FormInput>;

// export the meta data
export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFormInput: Story = {
  args: {
    variant: 'box',
  },
};

export const SmallFormInput: Story = {
    args: {
      size: "small",
      variant: 'box',
    },
  };

  export const LargeFormInput: Story = {
    args: {
      size: "large",
    },
  };

