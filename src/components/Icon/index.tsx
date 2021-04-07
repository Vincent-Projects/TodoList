import React from "react";
import { ICONS } from "components/contants";
import classes from "./index.module.css";

export interface IconProps {
  iconName: string;
}

const Icon = ({ iconName }: IconProps) => {
  const icon = ICONS.find((icon) => icon.name === iconName);
  let IconImg;

  if (icon) {
    IconImg = icon.img;
  }

  return <div className={classes.Container}>{IconImg ? IconImg : null}</div>;
};

export default Icon;
