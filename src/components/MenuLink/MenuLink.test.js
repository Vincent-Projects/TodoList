import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import MenuLink from "./index";
import { NavLink } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("<MenuLink />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MenuLink to="route1" />);
  });

  it("should render a <NavLink /> element, if text, route, and iconName are provided", () => {
    expect(wrapper.find(NavLink)).toHaveLength(1);
    expect(wrapper.find(NavLink).prop('to')).toBe("route1");
  });
});
