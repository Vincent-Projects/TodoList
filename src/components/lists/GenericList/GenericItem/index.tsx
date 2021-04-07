import React from "react";
import styled from "styled-components";
import ColorSelect from "./ColorSelect";

export interface GenericItemProps {
  done: boolean;
  text: string;
  color: string;
  handleClick: () => void;
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.65rem;
  cursor: pointer;
`;

interface CheckBoxProps {
  done: boolean;
}

const CheckBox = styled.div`
  width: 1rem;
  height: 1rem;
  align-self: center;
  margin-right: 0.5rem;
  border-radius: 50%;
  border: 2px solid rgb(var(--surface));
  background-color: ${(props: CheckBoxProps) =>
    props.done ? "rgb(var(--primary))" : "transparent"};
`;

const ColorSelectContainer = styled.div`
  margin-right: 0.5rem;
`;

interface TextProps {
  done: boolean;
}

const Text = styled.p`
  padding: 0.1rem;
  margin: 0;
  text-decoration: ${(props: TextProps) =>
    props.done ? "line-through" : "none"};
  opacity: ${(props) => (props.done ? "0.6" : "1")};
`;

const GenericItem = ({ done, text, color, handleClick }: GenericItemProps) => {
  return (
    <ItemContainer onClick={handleClick}>
      <ColorSelectContainer>
        <ColorSelect color={color} />
      </ColorSelectContainer>
      <CheckBox done={done} />
      <Text done={done}>{text}</Text>
      <div>{/* Interaction buttons  */}</div>
    </ItemContainer>
  );
};

export default GenericItem;
