
import type { Meta, StoryObj } from '@storybook/react';
import IPY from './component';
import {Autocomplete, Button, TextField, Typography} from "@mui/material";
import React from "react";


const meta: Meta<typeof IPY.Header> = {
  title: "Components/Header",
  component: IPY.Header,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'center',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },

};

export default meta;
type Story = StoryObj<typeof IPY.Header>;

export const Header: Story = {
  args: {
    title: 'tes',
    menu: false,
    children:
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Type" />}
      />
      <Button variant="outlined" ><Typography>Search</Typography></Button>
    </>

  },
};