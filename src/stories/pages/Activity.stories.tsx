import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import withLayout from "../../components/hoc/withLayout";
import { Activity } from "../../pages";

export default {
  title: "Pages/Activity",
  component: Activity,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Activity>;

const Template: ComponentStory<typeof Activity> = (args) => (
  <BrowserRouter>
    <Activity {...args} />
  </BrowserRouter>
);

export const Story = Template.bind({});
Story.args = {};

export const withLayoutStory: ComponentStory<typeof Activity> = (args) => {
  const Comp = withLayout(Activity);
  return (
    <BrowserRouter>
      <Comp></Comp>
    </BrowserRouter>
  );
};
