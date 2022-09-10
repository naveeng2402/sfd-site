import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { EventCoordinatorsCard } from "../components/presentation";

export default {
  title: "Components/EventCoordinatorsCard",
  component: EventCoordinatorsCard,
  args: {
    event_name: "PROJECT EXPO(TEAM)",
    coordinators: ["SANJAY", "YUVARAJ", "SIDDHARTH"],
    number: "+91 8870370866",
  },
} as ComponentMeta<typeof EventCoordinatorsCard>;

const Template: ComponentStory<typeof EventCoordinatorsCard> = (args) => (
  <EventCoordinatorsCard {...args} />
);

export const Story = Template.bind({});
Story.args = {};
