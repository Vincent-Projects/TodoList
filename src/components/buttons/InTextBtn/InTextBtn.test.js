import React from "react";
import { fireEvent } from "@testing-library/dom";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import InTextBtn from "./index";

describe("<InTextBtn />", () => {
  let container = null;
  let text = null;
  let clickHandler = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    text = "Click Me!";
    clickHandler = jest.fn();
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    text = null;
    jest.clearAllMocks();
    clickHandler = null;
  });

  it("should render properly the text passed through props", () => {
    act(() => {
      render(<InTextBtn text={text} handleClick={clickHandler} />, container);
    });

    expect(container.firstElementChild.textContent).toEqual(text);
  });

  it("should trigger the click event one time on click", () => {
    act(() => {
      render(<InTextBtn text={text} handleClick={clickHandler} />, container);
    });

    fireEvent.click(container.firstElementChild);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
