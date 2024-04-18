import type { Meta, StoryObj } from '@storybook/react';

import { ChakraHeading } from './Heading';

// this is the default value - you can add args here that will cascade down the rest of the stories
const meta = {
  title: 'Example/ChakraHeading',
  component: ChakraHeading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    color: "black",
  },
} satisfies Meta<typeof ChakraHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

// create a story with a utility function
export const ChakraHeadingPrimary: Story = {
    args: {
        backgroundColor: 'white',
      },
};

export const ChakraHeadingSecondary: Story = {
    args: {
        backgroundColor: 'lightBlue',
      },
};
// the args in the functions will override the parent arg
export const ChakraHeadingTertiary: Story = {
    args: {
        color: "blue",
        backgroundColor: 'lightGray',
      },
};

