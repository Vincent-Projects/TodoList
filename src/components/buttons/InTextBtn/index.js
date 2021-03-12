import React from "react";
import PropTypes from "prop-types"

import classes from "./index.module.css";

const InTextBtn = ({ text, handleClick, darkTheme = true }) => {
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

InTextBtn.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func
};

export default InTextBtn;