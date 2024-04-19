import {Stack} from "./Stack"
import type { Meta, StoryObj } from '@storybook/react';

// set up meta data
const meta = {
        title: "Example/Stack",
        component: Stack,
  } satisfies Meta<typeof Stack>;

// export the meta data
export default meta;
type Story = StoryObj<typeof meta>;

// assign function to story type
export const HorizontalStack:Story = {
  args: {
    direction: "row",
    spacing: 4,
    wrap: false,
    numberOfChildren: 10,
  },
};

export const VerticalStack: Story ={
args: {
  direction: "column",
  spacing: 2,
  numberOfChildren: 10,
},
};

export const Experiment:Story = {
args: {
  numberOfChildren: 1,
  backgroundColor: "blue",
},
};
