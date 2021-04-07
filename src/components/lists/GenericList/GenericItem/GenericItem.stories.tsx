import React from "react";
import { Story } from "@storybook/react";
import GenericItem, { GenericItemProps } from "./index";

const configComponent = {
  component: GenericItem,
  title: "Components/Lists/GenericList/GenericItem",
};

export default configComponent;

const Template: Story<GenericItemProps> = (args) => (
  <>
    <GenericItem {...args} />
    <GenericItem {...args} />
    <GenericItem {...args} />
    <GenericItem {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  text: "This is a todo that need to be tackle during this day",
  color: "1",
  done: true,
  handleClick: () => {},
};
