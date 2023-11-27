import TextButton from "./Text.Button"
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof TextButton> = {
    title: "Components/Button",
    component: TextButton,
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
  type Story = StoryObj<typeof TextButton>;
  
  export const Primary: Story = {
    args: {
      variant: 'text',
      label: 'submit'
    },
  };
  export const Secondary: Story = {
    args: {
      variant: 'text',
      label: 'submit'
    },
  };