import IPY from './component';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof IPY.Button> = {
    title: "Components/Button",
    component: IPY.Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
      },
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
      tags: ['autodocs'],
      // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
      // argTypes: {
      //   color: { control: 'color' },
      // },
  };
  
  export default meta;
  type Story = StoryObj<typeof IPY.Button>;
  
  export const Button: Story = {
    args: {
      variant: 'contained',
      text: 'submit'
    },
  };
