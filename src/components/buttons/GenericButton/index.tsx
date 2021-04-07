import React from "react";

import classes from "./index.module.css";

export interface GenericButtonProps {
  text: string;
  handleClick: () => void;
  isSubmit?: boolean;
}

const GenericButton = ({
  text,
  handleClick,
  isSubmit = false,
}: GenericButtonProps) => {
  const buttonType = isSubmit ? "submit" : "button";

  return (
    <button className={classes.Button} onClick={handleClick} type={buttonType}>
      <span className={classes.ButtonText}>{text}</span>
    </button>
  );
};

export default GenericButton;
