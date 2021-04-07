import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MenuLink from "./index";
import { ICONS } from "../contants";

const configStoryComponent = {
  component: MenuLink,
  title: "Menu/MenuLink",
};

export default configStoryComponent;

const Template = (args) => (
  <Router>
    <div
      style={{
        width: "17%",
      }}
    >
      <MenuLink {...args} />
    </div>
  </Router>
);

export const Home = Template.bind({});
Home.args = {
  iconName: ICONS[0].name,
  text: "Dashboard",
  to: "/dashboard",
};
