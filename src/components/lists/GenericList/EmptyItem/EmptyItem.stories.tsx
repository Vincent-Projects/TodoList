import React from "react";
import { Story } from "@storybook/react";

import EmptyItem, { EmptyItemProps } from "./index";

const configComponent = {
  component: EmptyItem,
  title: "Components/Lists/GenericList/EmptyItem"
};

export default configComponent;

const Template: Story<EmptyItemProps> = args => (
 <>
  <EmptyItem {...args} />
  <EmptyItem {...args} />
</>
);

export const Default = Template.bind({});
Default.args = {
  text: "Add something to do...",
  handleSave: (text) => alert(text)
};