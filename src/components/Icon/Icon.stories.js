import React from "react";

import Icon from "./index";

import { ICONS } from "../contants";

const configStoryComponent = {
  component: Icon,
  title: "Icon"
};

export default configStoryComponent;

const Template = args => <Icon {...args} />;

export const Home = Template.bind({});
Home.args = {
  iconName: ICONS[0].name
};

export const Project = Template.bind({});
Project.args = {
  iconName: ICONS[1].name
};

export const Habits = Template.bind({});
Habits.args = {
  iconName: ICONS[2].name
};

export const Goals = Template.bind({});
Goals.args = {
  iconName: ICONS[3].name
};

export const Profile = Template.bind({});
Profile.args = {
  iconName: ICONS[4].name
};