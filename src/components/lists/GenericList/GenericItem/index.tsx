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
  margin-right: 0.5rem;
`;

const Text = styled.p`
  padding: 0.1rem;
  margin: 0;
`;

const GenericItem = ({ text, color }: GenericItemProps) => {
  return (
    <ItemContainer>
      <ColorSelectContainer>
        <ColorSelect color={color} />
      </ColorSelectContainer>
      <Text>{text}</Text>
      <div>{/* Interaction buttons  */}</div>
    </ItemContainer>
  );
};

export default GenericItem;