import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToolCard } from "../components/presentation";

export default {
  title: "Components/ToolCard",
  component: ToolCard,
  args: {
    text: "Blender",
    logo: "https://unsplash.it/64",
  },
} as ComponentMeta<typeof ToolCard>;

const Template: ComponentStory<typeof ToolCard> = (args) => (
  <ToolCard {...args} />
);

export const Story = Template.bind({});
Story.args = {};
