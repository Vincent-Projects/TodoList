import React from "react";
import styled from "styled-components";

export interface GenericButtonProps {
  text: string;
  handleClick: (event: any) => void;
  isSubmit?: boolean;
}

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: rgb(var(--primary));
  border: none;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;

  &:after {
    background-color: rgba(var(--primary-dark), 0.6);
    width: 0%;
    height: 100%;
    position: absolute;
    content: "";
    left: -10%;
    top: 0;
    transition: 300ms;
    transform: skewX(25deg);
  }

  &:before {
    background-color: rgba(var(--primary-dark), 0.6);
    width: 0%;
    height: 100%;
    position: absolute;
    content: "";
    right: -10%;
    top: 0;
    transition: 300ms;
    transform: skewX(25deg);
  }

  &:hover:after,
  &:hover:before {
    width: 60%;
  }

  &:focus,
  &:active {
    outline: 1px solid rgb(var(--primary-outline));
  }
`;

const Text = styled.span`
  z-index: 100;
  position: relative;
`;

const GenericButton = ({
  text,
  handleClick,
  isSubmit = false,
}: GenericButtonProps) => {
  const buttonType = isSubmit ? "submit" : "button";

  return (
    <Button onClick={handleClick} type={buttonType}>
      <Text>{text}</Text>
    </Button>
  );
};

export default GenericButton;
