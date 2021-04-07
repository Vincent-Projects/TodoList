import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import GenericInput from "./index";

configure({ adapter: new Adapter() });

describe("<GenericInput />", () => {
  it("should render a div element with label and input inside", () => {
    const wrapper = shallow(<GenericInput />);

    expect(wrapper.find(HTMLDivElement)).toHaveLength(1);
    expect(wrapper.find(HTMLLabelElement)).toHaveLength(1);
    expect(wrapper.find(HTMLInputElement)).toHaveLength(1);
  });

  //it('should render a label with the label provided and the id provided');
});
