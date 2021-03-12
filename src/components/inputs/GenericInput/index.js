import React from "react";
import PropTypes from "prop-types";

import classes from "./index.module.css";

const GenericInput = ({ id, value, handleChangeText, label, placeholder = null, isError = false, type = "text" }) => {
    const labelClasses = isError ? [classes.Label, classes.LabelError].join(" ") : classes.Label;
    const inputClasses = isError ? [classes.Input, classes.InputError].join(" ") : classes.Input;

    return (
        <div className={classes.Container}>
            <label className={labelClasses} for={id}>
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