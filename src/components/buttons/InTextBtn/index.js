import React from "react";
import PropTypes from "prop-types"

import classes from "./index.module.css";

const InTextBtn = ({ text, handleClick }) => {
    return (
        <span className={classes.Button} onClick={handleClick}>
            {text}
        </span>
    );
};

InTextBtn.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func
};

export default InTextBtn;