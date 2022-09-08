import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import withLayout from "../../components/hoc/withLayout";
import { GalleryDetails } from "../../pages";

export default {
  title: "Pages/GalleryDetails",
  component: GalleryDetails,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof GalleryDetails>;

const Template: ComponentStory<typeof GalleryDetails> = (args) => (
  <BrowserRouter>
    <GalleryDetails {...args} />
  </BrowserRouter>
);

export const Story = Template.bind({});
Story.args = {};

export const withLayoutStory: ComponentStory<typeof GalleryDetails> = (
  args
) => {
  const Comp = withLayout(GalleryDetails);
  return (
    <BrowserRouter>
      <Comp {...args}></Comp>
    </BrowserRouter>
  );
};
