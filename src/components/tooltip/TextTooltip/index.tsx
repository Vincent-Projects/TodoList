import React from "react";
import PropTypes from "prop-types";
import classes from "./index.module.css";

interface TextToolTipProps {
  text: string,
  content: React.ReactChildren
}

const TextTooltip = ({ text, content }: TextToolTipProps) => {
  return (
    <div className={classes.ToolTip}>
      <p>{text}</p>
      <div className={classes.ToolTipContent}>
        {content}
      </div>
    </div>
  );
};

TextTooltip.propTypes = {
  text: PropTypes.string,
  content: PropTypes.object,
};

export default TextTooltip;
