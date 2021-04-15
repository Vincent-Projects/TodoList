import React, { useState, useRef, useEffect } from "react";
import { ItemContainer } from "components/lists/GenericList/GenericItem";
import styled, { css } from "styled-components";
import withVisible from "hooks/withVisible";

const textStyles = css`
  background-color: transparent;
  border: none;
  outline: none;
  color: rgb(var(--on-bg));
  font-size: inherit;
  width: 100%;
  height: 100%;
  cursor: text;
`;

const Text = styled.p`
  ${textStyles}
  opacity: 0.6;
`;

const Input = styled.input`
  ${textStyles}
`;

export interface EmptyItemProps {
  text: string;
  handleSave: (text: string) => void;
  handleSetVisible: () => void;
  isVisible: boolean;
}

const EmptyItem = ({
  text,
  handleSave,
  isVisible,
  handleSetVisible,
}: EmptyItemProps) => {
  /* const [isTyping, setIsTyping] = useState(false); */
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (isVisible && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(focusInput, [isVisible]);

  const handleClick = (event: any) => {
    event.stopPropagation();
    if (!isVisible) {
      handleSetVisible();
    } else {
      focusInput();
    }
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSave(value);
    }
  };

  return (
    <ItemContainer onClick={handleClick}>
      {!isVisible ? (
        <Text>{text}</Text>
      ) : (
          <Input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      )}
    </ItemContainer>
  );
};

export default withVisible(EmptyItem);
