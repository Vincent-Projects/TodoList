import React from "react";
import classes from "./index.module.css";
import styled from "styled-components"

const Requirements = styled.p`
  opacity: 0.8;
  font-size: 0.8rem;
`;

type InputType = "text" | "password";

interface Props {
  id: string;
  value: string;
  handleChangeText: (text: string) => void;
  label: string;
  placeholder?: string;
  isError: boolean;
  errMessage: string | null;
  type?: InputType;
  darkTheme?: boolean;
  requirements?: string
}

const GenericInput = ({
  id,
  value,
  handleChangeText,
  label,
  placeholder = "",
  isError = false,
  errMessage = null,
  type = "text",
  darkTheme = true,
  requirements = ""
}: Props) => {
  const labelClasses = [
    isError ? classes.LabelError : null,
    darkTheme ? null : classes.LabelLight,
    classes.Label,
  ].join(" ");

  const inputClasses = [
    isError ? classes.InputError : null,
    darkTheme ? null : classes.InputLight,
    classes.Input,
  ].join(" ");

  const errComponent = isError ? (
    <p className={classes.ErrorMessage}>{errMessage}</p>
  ) : null;
  
  return (
    <div className={classes.Container}>
      <label className={labelClasses} htmlFor={id}>
        <span>
          {label}
          {requirements ? <Requirements>{requirements}</Requirements> : null}
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
      {errComponent}
    </div>
  );
};

export default GenericInput;
