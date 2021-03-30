import React from "react";
import styled from "styled-components";

import { ColorObject } from "utils/colors";
import { hasPremiumPermission } from "utils/auth";
import { ACCESSLEVEL } from "utils/constants";

const ColorPaletteContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background-color: rgba(var(--primary), 0.6);
    border-radius: 5px;
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(var(--primary));
    border-radius: 5px;
  }
`;

const ColorPaletteStyle = styled.div`
  padding: 0.2rem;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 0px;
  row-gap: 0px;
`;

interface ColorProps {
  primary: string;
  secondary: string;
  locked: boolean;
}

const Color = styled.div`
  background: linear-gradient(45deg, rgb(var(--color-${(props: ColorProps) => props.primary})) 0% 48%, rgb(var(--color-${props => props.secondary})) 52% 100%);
  aspect-ratio: 1;
  transition: 250ms;
  position: relative;
  cursor: pointer;

  ${props => !props.locked ? `
    &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 1px rgba(var(--shadow), 0.3);
  }

  &:active {
    transform: scale(0.9);
    box-shadow: none;
  }
  ` : `
    cursor: not-allowed;
  `}
  

  ${props => props.locked ? (
    `
    &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: normal;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.6);
  }`
  ) : null}
  
`;


export interface ColorPaletteProps {
  selectedColor: string;
  colors: ColorObject[];
  handleColorChange: () => string;
}

const ColorPalette = ({ selectedColor, colors, handleColorChange }: ColorPaletteProps) => {
  console.log(hasPremiumPermission());
  return (
    <ColorPaletteContainer>
      <ColorPaletteStyle>
        {colors.map(color => (
          <Color
            key={color.id}
            primary={color.color}
            secondary={color.secondColor}
            locked={(color.accessLevel === ACCESSLEVEL.PREMIUM && !hasPremiumPermission()) ? true : false}
          />
          ))}
      </ColorPaletteStyle>
    </ColorPaletteContainer>
  );
};

export default ColorPalette;