import classes from "./index.module.css";
import React from "react";

type SpinnerMode = "cubic" | "circle";

type Props = {
    mode: SpinnerMode
}

const DiamondSpinner = ({ mode = "cubic" }: Props) => {
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

export default DiamondSpinner;