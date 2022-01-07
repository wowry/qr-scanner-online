import React from "react";
import { Story, Meta } from "@storybook/react";
import ResultCard, { Props } from "../components/ResultCard";
import { Provider } from "react-redux";
import { store } from "../libs/store";

export default {
  title: "App/ResultCard",
  component: ResultCard,
} as Meta;

const Template: Story<Props> = (args) => (
  <Provider store={store}>
    <ResultCard {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  id: 0,
  url: "https://qr-scanner-online.wowry.dev/",
};
