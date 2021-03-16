import React from "react";
import PropTypes from "prop-types";
import { ICONS } from "../contants";
import classes from "./index.module.css";

const Icon = ({ iconName }) => {
  let icon = ICONS.find(icon => icon.name === iconName);
  let IconImg = () => <div></div>;

  if (icon) {
    IconImg = icon.img;
  }

  return (
    <div className={classes.Container}>
      <IconImg />
    </div>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string
};

export default Icon;