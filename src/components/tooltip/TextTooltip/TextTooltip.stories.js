import React from "react";

import TextTooltip from "./index";

const configStoryComponent = {
  component: TextTooltip,
  title: "Experiments/TextTooltip",
};

export default configStoryComponent;

const Template = (args) => <TextTooltip {...args} />;

const Def = (
  <div>
    <p>
      Something hereSomething hereSomething hereSomething hereSomething
      hereSomething hereSomething here
    </p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
    <p>Something here</p>
  </div>
);

const C = () => (
  <p style={{ backgroundColor: "rgb(var(--bg-4dp))", width: "5rem" }}>
    Another thing
  </p>
);

export const Default = Template.bind({});
Default.args = {
  text: "detault",
  content: Def,
  Component: C,
};
