import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "../components/presentation/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Story = Template.bind({});
Story.args = {};
