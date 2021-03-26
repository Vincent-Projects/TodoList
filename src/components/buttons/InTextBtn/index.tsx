import React from "react";

import classes from "./index.module.css";

export interface InTextBtnProps {
  text: string;
  handleClick: () => void;
  darkTheme?: boolean;
  warning?: boolean
}

const InTextBtn = ({ text, handleClick, darkTheme = true, warning = false }: InTextBtnProps) => {
  const btnClasses = [
    classes.Button,
    darkTheme
      ? warning
        ? classes.ButtonWarning
        : null
      : classes.ButtonLight,
  ].join(" ");

  return (
    <span className={btnClasses} onClick={handleClick}>
      {text}
    </span>
  );
};

export default InTextBtn;
