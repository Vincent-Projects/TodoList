import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.css";

const GenericButton = ({ text, handleClick, isSubmit = null }) => {
  const buttonType = isSubmit ? "submit" : null;

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

GenericButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  isSubmit: PropTypes.bool
};

export default GenericButton;