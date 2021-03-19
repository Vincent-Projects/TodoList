import React from "react";
import InTextBtn from "./index";

const configStoryComponent = {
  component: InTextBtn,
  title: "InTextBtn"
};

export default configStoryComponent;

const Template = args => {
  return <InTextBtn {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "sample text",
  darkTheme: true
};

export const LightMode = Template.bind({});
LightMode.args = {
  text: "sample text",
  darkTheme: false
};