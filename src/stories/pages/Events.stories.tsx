import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import withLayout from "../../components/hoc/withLayout";

import { Events } from "../../pages";

export default {
  title: "Pages/Events",
  component: Events,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Events>;

const Template: ComponentStory<typeof Events> = (args) => <Events {...args} />;

export const Story = Template.bind({});
Story.args = {};

export const withLayoutStory: ComponentStory<typeof Events> = (args) => {
  const Comp = withLayout(Events);
  return (
    <BrowserRouter>
      <Comp></Comp>
    </BrowserRouter>
  );
};
