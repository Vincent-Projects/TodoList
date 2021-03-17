import React from "react";

import TextTooltip from "./index";

const configStoryComponent = {
  component: TextTooltip,
  title: "TextTooltip"
};

export default configStoryComponent;

const Template = args => <TextTooltip {...args} />;

const Def = () => <p>Something</p>;

export const Default = Template.bind({});
Default.args = {
  text: "detault",
  content: Def
};