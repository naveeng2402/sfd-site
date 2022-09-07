import { ComponentStory, ComponentMeta } from "@storybook/react";
import linus from "../assets/imgs/linus.jpg";

import { PeopleCard } from "../components/presentation";

export default {
  title: "Components/PeopleCard",
  component: PeopleCard,
  args: {
    name: "Linus Torvalds",
    desc: "The images are set to be circular and responsive. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui",
    image: linus,
  },
} as ComponentMeta<typeof PeopleCard>;

const Template: ComponentStory<typeof PeopleCard> = (args) => (
  <PeopleCard {...args} />
);

export const Story = Template.bind({});
Story.args = {};
