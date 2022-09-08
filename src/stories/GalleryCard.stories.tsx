import { ComponentStory, ComponentMeta } from "@storybook/react";
import galleryData from "../data/galleryData";

import { GalleryCard } from "../components/presentation";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/GalleryCard",
  component: GalleryCard,
} as ComponentMeta<typeof GalleryCard>;

const Template: ComponentStory<typeof GalleryCard> = (args) => (
  <BrowserRouter>
    <GalleryCard {...args} />
  </BrowserRouter>
);

export const Story = Template.bind({});
Story.args = { ...galleryData[0] };
