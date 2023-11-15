import type { Meta, StoryObj } from '@storybook/react';

import ChakraCircle from './ChakraCircle';

const meta = {
  title: 'ChakraCircle',
  component: ChakraCircle,
  parameters: {
    layout: 'centred',
  },
} satisfies Meta<typeof ChakraCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseChakraCircle: Story = {}

export const RedChakraCircle: Story = {
  args:{
      variant: 'red', 
  },
};
  export const YellowChakraCircle: Story = {
    args:{
        variant: 'yellow', 
      },
    };
    export const GreenChakraCircle: Story = {
      args:{
          variant: 'green', 
        },
      };
