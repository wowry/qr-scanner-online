import React from "react";
import { Story, Meta } from "@storybook/react";
import Description from "../components/Description";

export default {
  title: "App/Description",
  component: Description,
} as Meta;

const Template: Story = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {};
