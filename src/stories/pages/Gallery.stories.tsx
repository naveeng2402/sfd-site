import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import withLayout from "../../components/hoc/withLayout";
import { Gallery } from "../../pages";

export default {
  title: "Pages/Gallery",
  component: Gallery,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => (
  <Gallery {...args} />
);

export const Story = Template.bind({});
Story.args = {};

export const withLayoutStory: ComponentStory<typeof Gallery> = (args) => {
  const Comp = withLayout(Gallery);
  return (
    <BrowserRouter>
      <Comp {...args}></Comp>
    </BrowserRouter>
  );
};
