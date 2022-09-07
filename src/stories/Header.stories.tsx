import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../components/presentation/Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);

export const Story = Template.bind({});
Story.args = {};
