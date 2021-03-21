import React from "react";

import classes from "./index.module.css";

interface Props {
  text: string,
  handleClick: () => void,
  isSubmit: boolean
}

const GenericButton = ({ text, handleClick, isSubmit = false }: Props) => {
  const buttonType = isSubmit ? "submit" : "button";

  return (
    <button
      className={classes.Button}
      onClick={handleClick}
      type={buttonType}
    >
      <span className={classes.ButtonText}>
        {text}
      </span>
    </button>
  );
};

export default GenericButton;