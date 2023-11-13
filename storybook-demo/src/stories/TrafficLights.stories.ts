import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent } from '@storybook/testing-library';

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
// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Board: Story = {
// args are props
args:{}
};
