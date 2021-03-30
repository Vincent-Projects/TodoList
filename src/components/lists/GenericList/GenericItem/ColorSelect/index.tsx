import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  width: 6px;
  height: 100%;
  background-color: ${props => props.color ? `rgb(var(--color-${props.color}))` : "transparent"};
`;

interface ColorSelectProps {
  color: string;
}

const ColorSelect = ({ color }: ColorSelectProps) => {
  return (
    <SelectContainer color={color} />
  );
};

export default ColorSelect;

