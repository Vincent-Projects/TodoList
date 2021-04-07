import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import MenuLink from "./index";
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<MenuLink />", () => {
  it("should render a <NavLink /> element, if text, route, and iconName are provided", () => {
    const wrapper = shallow(
      <MenuLink
        text="sample string"
        iconName="sample string"
        to="/sample_route"
      />
    );
    expect(wrapper.find(NavLink)).toHaveLength(1);
  });
});
