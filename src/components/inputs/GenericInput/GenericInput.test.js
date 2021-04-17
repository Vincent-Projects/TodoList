import React from "react";
import { fireEvent } from "@testing-library/dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import GenericInput from "./index";
import { getByText } from "@testing-library/dom";

describe("<GenericInput />", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("should change the value of passed value using provided function handler", () => {
    let value = "";
    const changeHandler = jest.fn((text) => {
      value = text;
    });

    act(() => {
      render(<GenericInput value={value} handleChangeText={changeHandler} />, container);
    });

    const input = container.getElementsByTagName('input')[0];

    expect(input.value).toEqual(value);

    fireEvent.change(input, { target: { value: "Something" } });

    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(value).toEqual("Something");
  });

  it("should show the label provided through props", () => {
    let label = "Email";

    act(() => {
      render(<GenericInput label={label} />, container);
    });

    expect(getByText(container, label)).toBeTruthy();
  });

  it("should display the error message if one is provided", () => {
    const errMessage = "Something went wrong";

    act(() => {
      render(<GenericInput errMessage={errMessage} isError={true} />, container);
    });

    expect(getByText(container, errMessage)).toBeTruthy();
  });
});