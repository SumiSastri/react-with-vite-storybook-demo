import type { Meta, StoryObj } from '@storybook/react';

import TrafficLights from './TrafficLights';

const meta = {
  title: 'TrafficLights',
  component: TrafficLights,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centred',
  },
} satisfies Meta<typeof TrafficLights>;

export default meta;
type Story = StoryObj<typeof meta>;

// CREATE component
export const Board: Story = {
// args are props
args:{}
};
