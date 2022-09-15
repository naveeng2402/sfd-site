import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { EventCard } from "../components/presentation";

export default {
  title: "Components/EventCard",
  component: EventCard,
  args: {
    title: "Event Name",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique magni magnam dignissimos libero, error eveniet nisi veritatis, facere in nam ab fugiat laudantium facilis.",
    regLink: "#",
    rulesLink: "#",
    poster: "https://unsplash.it/961/680",
  },
} as ComponentMeta<typeof EventCard>;

const Template: ComponentStory<typeof EventCard> = (args) => (
  <EventCard {...args} />
);

export const Story = Template.bind({});
Story.args = {};
