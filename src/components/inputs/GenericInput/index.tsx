import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`; 

const Requirements = styled.p`
  opacity: 0.8;
  font-size: 0.8rem;
`;

const Label = styled.label<FieldsProps>`
  padding: 0.3rem;
  font-size: 0.8rem;
  color: rgb(${props => props.isError ? props.theme.error : props.theme.onBg});
`;

interface FieldsProps {
  isError: boolean;
}

const Input = styled.input<FieldsProps>`
  padding: 0.55rem;
  font-size: 1.05rem;
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid rgb(${props => props.isError ? props.theme.error : props.theme.primary});
  outline: none;
  background: transparent;
  color: rgb(${props =>  props.theme.onBg});
  box-sizing: border-box;

  &:active,
  &:focus {
    border-width: 3px;
    padding-bottom: calc(0.55rem - 2px);
  }
`;

const ErrorMessage = styled.p`
  color: rgb(${props => props.theme.error});
  margin-top: 0.2rem;
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
  requirements?: string;
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
  requirements = "",
}: Props) => {

  const errComponent = isError ? (
    <ErrorMessage>{errMessage}</ErrorMessage>
  ) : null;

  const requirementsComponent = requirements ? (
    <Requirements>{requirements}</Requirements>
  ) : null;

  return (
    <Container>
      <Label htmlFor={id} isError={isError}>
        <span>
          {label}
          {requirementsComponent}
        </span>
      </Label>
      <Input
        id={id}
        value={value}
        type={type}
        onChange={(e) => handleChangeText(e.target.value)}
        placeholder={placeholder}
        isError={isError}
        autoComplete="off"
      />
      {errComponent}
    </Container>
  );
};

export default GenericInput;
