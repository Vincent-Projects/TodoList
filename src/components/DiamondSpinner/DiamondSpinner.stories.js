import React from "react";

import DiamondSpinner from "./index";

const configStoryComponent = {
    component: DiamondSpinner,
    title: "DiamondSpinner"
};

export default configStoryComponent;

const Template = args => <DiamondSpinner {...args} />;

export const Default = Template.bind({});
Default.args = {
    mode: "cubic"
};

export const Circle = Template.bind({});
Circle.args = {
    mode: "circle"
};