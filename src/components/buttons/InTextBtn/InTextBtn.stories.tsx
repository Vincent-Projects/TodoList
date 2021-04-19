import React from "react";
import { Story } from "@storybook/react";
import InTextBtn, { InTextBtnProps } from "./index";
import { ThemeProvider } from "styled-components";
import { getTheme } from "theme";

const decorators = [
  (Story: Story) => (
    <ThemeProvider theme={getTheme()}>
      <Story />
    </ThemeProvider>
  ),
];

const configStoryComponent = {
  component: InTextBtn,
  title: "Components/Buttons/InTextBtn",
  decorators: decorators,
};

export default configStoryComponent;

const Template: Story<InTextBtnProps> = (args) => <InTextBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Sample text",
};

export const WarningMode = Template.bind({});
WarningMode.args = {
  text: "Sample text",
  warning: true,
};
