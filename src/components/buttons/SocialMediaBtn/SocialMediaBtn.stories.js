import React from "react";
import SocialMediaBtn from "./index"

import * as constants from "../../contants";

const configStoryComponent = {
  component: SocialMediaBtn,
  title: "SocialMediaBtn"
};

export default configStoryComponent;

const Template = args => <SocialMediaBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: constants.TWITTER,
};