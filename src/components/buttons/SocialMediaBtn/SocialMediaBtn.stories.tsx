import React from "react";
import { Story } from "@storybook/react";
import SocialMediaBtn, { SocialMediaBtnProps } from "./index";
import * as constants from "../../contants";

const configStoryComponent = {
  component: SocialMediaBtn,
  title: "Components/Buttons/SocialMediaBtn",
};

export default configStoryComponent;

const Template: Story<SocialMediaBtnProps> = (args) => (
  <SocialMediaBtn {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: constants.TWITTER,
};
