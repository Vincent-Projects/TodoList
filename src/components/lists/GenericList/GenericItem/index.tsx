import React from "react";
import styled from "styled-components";
import ColorSelect from "./ColorSelect";

export interface GenericItemProps {
  text: string;
  color: string;
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.65rem;
`;

const ColorSelectContainer = styled.div`
  display: block;
  margin-right: 0.5rem;
`;

const Text = styled.p`
  display: block;
  border: 1px solid red;
`;

const GenericItem = ({ text, color }: GenericItemProps) => {
  return (
    <ItemContainer>
      <ColorSelectContainer>
        <ColorSelect color={color}/>
      </ColorSelectContainer>
      <p>{text}</p>
      <div>{/* Interaction buttons  */}</div>
    </ItemContainer>
  );
};

export default GenericItem;