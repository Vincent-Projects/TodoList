import React from "react";

import classes from "./index.module.css";

interface Props {
  text: string,
  handleClick: () => void,
  darkTheme?: boolean
}

const InTextBtn = ({ text, handleClick, darkTheme = true }: Props) => {
  const btnClasses = [
    classes.Button,
    (darkTheme ? null : classes.ButtonLight)
  ].join(" ");

  return (
    <span className={btnClasses} onClick={handleClick}>
      {text}
    </span>
  );
};

export default InTextBtn;