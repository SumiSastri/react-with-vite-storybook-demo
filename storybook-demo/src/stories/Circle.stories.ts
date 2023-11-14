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

export const Board: Story = {
// args are props
args:{
    varient: 'none'
}
};
