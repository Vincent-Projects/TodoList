import classes from "./index.module.css";
import React from "react";

type SpinnerMode = "cubic" | "circle";

export type DiamondSpinnerProps = {
  mode?: SpinnerMode;
};

const DiamondSpinner = ({ mode = "cubic" }: DiamondSpinnerProps) => {
  let loaderClasses = [
    classes.loader,
    mode === "cubic"
      ? classes.Cubic
      : mode === "circle"
      ? classes.Circle
      : null,
  ].join(" ");

  return (
    <div className={loaderClasses}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DiamondSpinner;
