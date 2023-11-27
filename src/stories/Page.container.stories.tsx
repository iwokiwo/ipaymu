
import type { Meta, StoryObj } from '@storybook/react';
import IPY from './component';


const meta: Meta<typeof IPY.PageContainer> = {
    title: "Components/Container",
    component: IPY.PageContainer,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
      },
      // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
      tags: ['autodocs'],
      // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
  };
  
  export default meta;
  type Story = StoryObj<typeof IPY.PageContainer>;
  
  export const PageContainer: Story = {
    args: {
      title: 'text',
      description:'tes'
    },
  };