import React from "react";
import { Story } from "@storybook/react";
import GenericList, { GenericListProps } from "./index";

const configComponent = {
  component: GenericList,
  title: "Components/Lists/GenericList/GenericList",
};

export default configComponent;

const Template: Story<GenericListProps> = (args) => <GenericList {...args} />;

export const Default = Template.bind({});
Default.args = {
  elements: [
    {
      _id: "someId",
      task: "Clean the kitchen",
      complete: false,
      tagColor: "",
      userId: "something",
    },
    {
      _id: "dzaddaz",
      task: "Another thing to do",
      complete: true,
      tagColor: "",
      userId: "something",
    },
  ],
};
