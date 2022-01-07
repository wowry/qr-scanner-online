import React from "react";
import { Story, Meta } from "@storybook/react";
import Header from "../components/Header";

export default {
  title: "App/Header",
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
