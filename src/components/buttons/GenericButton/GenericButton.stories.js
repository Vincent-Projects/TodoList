import React from "react";
import GenericButton from "./index";

const configStoryComponent = {
    component: GenericButton,
    title: "GenericButton"
};

export default configStoryComponent;


const Template = args => <GenericButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Button",
    handleClick: () => alert("You clicked on the button")
};