import React from "react";
import styled from "styled-components";

export interface InTextBtnProps {
  text: string;
  handleClick: () => void;
  warning?: boolean;
}

interface ButtonProps {
  warning: boolean;
}

const Button = styled.span<ButtonProps>`
  padding-bottom: 0.2rem;
  cursor: pointer;
  position: relative;
  user-select: none;
  color: rgb(
    ${(props: any) => (props.warning ? props.theme.error : props.theme.onBg)}
  );

  &:after {
    content: "";
    position: absolute;
    width: 50%;
    height: 1px;
    left: 25%;
    bottom: 0;
    border-bottom: 1px solid rgb(${(props) => props.theme.primary});
    transition: 350ms;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  &:focus,
  &:active {
    opacity: 0.9;
  }
`;

const InTextBtn = ({ text, handleClick, warning = false }: InTextBtnProps) => {
  return (
    <Button onClick={handleClick} warning={warning}>
      {text}
    </Button>
  );
};

export default InTextBtn;
