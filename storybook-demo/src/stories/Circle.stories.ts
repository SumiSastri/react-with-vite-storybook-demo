import type { Meta, StoryObj } from '@storybook/react';

import Circle from './Circle';

const meta = {
  title: 'Circle',
  component: Circle,
  parameters: {
    layout: 'centred',
  },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Add nested stories - base circle is blue
export const BaseCircle: Story = {}

export const RedCircle: Story = {
  args:{
      variant: 'red', 
  },
};
  export const YellowCircle: Story = {
    args:{
        variant: 'yellow', 
      },
    };
    export const GreenCircle: Story = {
      args:{
          variant: 'green', 
        },
      };
