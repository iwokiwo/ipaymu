
import type { Meta, StoryObj } from '@storybook/react';
import IPY from './component';


const meta: Meta<typeof IPY.MonthlySummary> = {
  title: "Components/Card",
  component: IPY.MonthlySummary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },

};

export default meta;
type Story = StoryObj<typeof IPY.MonthlySummary>;

export const MonthlySummary: Story = {
  args: {
    title: 'text',
    amount:'RP 300000',
    backgroundColor:'',
    trx:'',
    percentage:''
  },
};