import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Icon from "./index";
import { ICONS, HOME } from "../contants";

Enzyme.configure({ adapter: new Adapter() });

describe("<Icon />", () => {
  it("should render the home icon if the HOME contant is provided", () => {
    const wrapper = mount(<Icon iconName={HOME} />);
    const iconSvg = ICONS.find((icon) => icon.name === HOME).img;
    const homeWrapper = mount(iconSvg);
    const svg = wrapper.find("svg");
    const homeSvg = homeWrapper.find("svg");
    expect(svg.instance()).toEqual(homeSvg.instance());
  });
});
