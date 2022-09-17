import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContactCard } from "../components/presentation";
import admin from "../assets/imgs/admin.jpg";

export default {
  title: "Components/ContactCard",
  component: ContactCard,
  args: {
    image: admin,
    title: "Website Admin",
    name: ["Prof. M.A.Kumaran"],
    position: "Head of the Department, Computer Science and Engineering",
    mail: "csehod@jec.ac.in",
    mobile: "+91-9444246644",
    layout: 0,
  },
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = (args) => (
  <ContactCard {...args} />
);

export const Story = Template.bind({});
Story.args = {};
