import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import withLayout from "../../components/hoc/withLayout";

import { Home } from "../../pages";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Story = Template.bind({});
Story.args = {};

export const withLayoutStory: ComponentStory<typeof Home> = (args) => {
  const Comp = withLayout(Home);
  return (
    <BrowserRouter>
      <Comp></Comp>
    </BrowserRouter>
  );
};
