import React from "react";
import { Story } from "@storybook/react";
import GenericButton, { GenericButtonProps } from "./index";

const configStoryComponent = {
  component: GenericButton,
  title: "Components/Buttons/GenericButton",
};

export default configStoryComponent;

const Template: Story<GenericButtonProps> = (args) => (
  <GenericButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: "Button",
  handleClick: () => alert("You clicked"),
};
