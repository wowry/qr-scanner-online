import React from "react";
import { Story, Meta } from "@storybook/react";
import InputPane from "../components/Scanner/_components/InputPane";
import { Provider } from "react-redux";
import { store } from "../libs/store";

export default {
  title: "App/InputPane",
  component: InputPane,
} as Meta;

const Template: Story = (args) => (
  <Provider store={store}>
    <InputPane {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};
