import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.css";


const DiamondSpinner = ({ mode = "cubic" }) => {
    let loaderClasses = [
        classes.loader,
        (mode === "cubic" ? classes.Cubic :
            (mode === "circle" ? classes.Circle : null)
        )
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

DiamondSpinner.propTypes = {
    mode: PropTypes.string
};

export default DiamondSpinner;