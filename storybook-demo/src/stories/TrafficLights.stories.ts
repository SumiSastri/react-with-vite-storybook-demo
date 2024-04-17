import type { Meta, StoryObj } from '@storybook/react';

import TrafficLights from './TrafficLights';

const meta = {
  title: 'TrafficLights',
  component: TrafficLights,
  tags: ['autodocs'],
  parameters: {
    layout: 'centred',
  },
} satisfies Meta<typeof TrafficLights>;

export default meta;
type Story = StoryObj<typeof meta>;

// CREATE component
export const TrafficLighs: Story = {
// args are props
args:{}
};
