import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.css";

const GenericInput = ({
    id,
    value,
    handleChangeText,
    label,
    placeholder = null,
    isError = false,
    type = "text",
    darkTheme = true
}) => {
    const labelClasses = [
        (isError ? classes.LabelError : null),
        (darkTheme ? null : classes.LabelLight),
        classes.Label
    ].join(" ");

    const inputClasses = [
        (isError ? classes.InputError : null),
        (darkTheme ? null : classes.InputLight),
        classes.Input
    ].join(" ");;


    return (
        <div className={classes.Container}>
            <label className={labelClasses} htmlFor={id}>
                <span>
                    {label}
                </span>
            </label>
            <input
                id={id}
                className={inputClasses}
                value={value}
                type={type}
                onChange={(e) => handleChangeText(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
};

GenericInput.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    handleChangeText: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
    type: PropTypes.string
};

export default GenericInput;