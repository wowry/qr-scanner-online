import React from "react";
import { Story, Meta } from "@storybook/react";
import OutputPane, {
  Props,
} from "../components/Scanner/_components/OutputPane";
import { Provider } from "react-redux";
import { store } from "../libs/store";

export default {
  title: "App/OutputPane",
  component: OutputPane,
} as Meta;

const Template: Story<Props> = (args) => (
  <Provider store={store}>
    <OutputPane {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  isPC: true,
};
