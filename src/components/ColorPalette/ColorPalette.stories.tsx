import React from "react";
import { Story } from "@storybook/react";

import ColorPalette, { ColorPaletteProps } from "./index";
import COLORS from "utils/colors";

const configComponent = {
  component: ColorPalette,
  title: "ColorPalette"
};

export default configComponent;

const Template: Story<ColorPaletteProps> = args => (
  <div style={{width: "10rem", height: "10rem"}}>
    <ColorPalette {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  colors: COLORS,
  selectedColor: "02",
  handleColorChange: () => {
    return ""
  }
}