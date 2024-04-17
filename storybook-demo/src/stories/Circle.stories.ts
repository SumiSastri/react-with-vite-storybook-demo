import type { Meta, StoryObj } from '@storybook/react';

import Circle from './Circle';

const meta = {
  title: 'Circle',
  component: Circle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centred',
  },
} satisfies Meta<typeof Circle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Add nested stories - base circle is blue
export const BaseCircle: Story = {}
// every story needs to be exported
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
      export const WhiteCircle: Story = {
        args:{
            variant: 'white', 
          },
        };


      // check me custom render
      // export const FlagCircles: Story = {
      //   render: (args) => <div>
      //   <Circle variant="red"/>
      //   <Circle variant="white"/>
      //   <Circle variant="blue"/>
      //   </div>
    
      //   };
  
