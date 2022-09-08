import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import withLayout from "../../components/hoc/withLayout";
import { Contact } from "../../pages";

export default {
  title: "Pages/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => (
  <BrowserRouter>
    <Contact {...args} />
  </BrowserRouter>
);

export const Story = Template.bind({});
Story.args = {};

export const withLayoutStory: ComponentStory<typeof Contact> = (args) => {
  const Comp = withLayout(Contact);
  return (
    <BrowserRouter>
      <Comp></Comp>
    </BrowserRouter>
  );
};
