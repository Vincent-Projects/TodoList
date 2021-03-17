import React from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";

const TextTooltip = ({ text, content: ToolTipComponent }) => {
  console.log(ToolTipComponent);
  return (
    <div className={classes.ToolTip}>
      <p>{text}</p>
      <div className={classes.ToolTipContent}>
        <ToolTipComponent />
      </div>
    </div>
  );
};

TextTooltip.propTypes = {
  text: PropTypes.string,
  content: PropTypes.object
};

export default TextTooltip;