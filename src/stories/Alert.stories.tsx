import React from "react";
import { Story, Meta } from "@storybook/react";
import Alert, { Props } from "../components/AlertList/_components/Alert";
import { Provider } from "react-redux";
import { store } from "../libs/store";

export default {
  title: "App/Alert",
  component: Alert,
} as Meta;

const Template: Story<Props> = (args) => (
  <Provider store={store}>
    <Alert {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  alert: {
    id: 0,
    timeoutId: setTimeout(() => {}),
    message: "Sample Error Message",
    severity: "error",
  },
  offset: 0,
  setOffset: () => {},
};
