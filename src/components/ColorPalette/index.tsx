import React from "react";
import styled from "styled-components";

import { ColorObject } from "utils/colors";
import { hasPremiumPermission } from "utils/auth";
import { ACCESSLEVEL } from "utils/constants";
import { CHECK } from "components/contants";
import Icon from "components/Icon";

const ColorPaletteContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2px;
  padding-right: calc(2px + 0.45rem);
  overflow-y: hidden;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.45rem;
    background-color: rgba(var(--primary), 0.6);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(var(--primary));
    border-radius: 5px;
  }

  &:hover{
    padding-right: 2px;
    overflow-y: auto;
    overflow-x: auto;
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
}

const Color = styled.div`
  background: linear-gradient(45deg, rgb(var(--color-${(props: ColorProps) => props.primary})) 0% 48%, rgb(var(--color-${props => props.secondary})) 52% 100%);
  aspect-ratio: 1;
  transition: 250ms;
  position: relative;
`;

const UnlockedColor = styled(Color)`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    box-shadow: 1px 1px 1px rgba(var(--shadow), 0.3);
  }

  &:active {
    transform: scale(0.9);
    box-shadow: none;
  }
`;

const UnlockedColorSelected = styled(UnlockedColor)`
  position: relative;
`;

const IconCheck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const LockedColor = styled(Color)`
  cursor: not-allowed;

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
  }
`;


export interface ColorPaletteProps {
  selectedColor: string;
  colors: ColorObject[];
  handleColorChange: (color: string) => void;
}

const ColorPalette = ({ selectedColor, colors, handleColorChange }: ColorPaletteProps) => {
  console.log(hasPremiumPermission());
  return (
    <ColorPaletteContainer>
      <ColorPaletteStyle>
        {colors.map(color => (
          (color.accessLevel === ACCESSLEVEL.PREMIUM && !hasPremiumPermission())
            ? (
              <LockedColor
                key={color.id}
                primary={color.color}
            secondary={color.secondColor}
              />
            )
            : color.id === selectedColor
              ? (
                <UnlockedColorSelected
                  key={color.id}
                  primary={color.color}
                  secondary={color.secondColor}
                  onClick={() => handleColorChange(color.id)}
                >
                  <IconCheck>
                    <Icon
                      iconName= {CHECK}
                    />
                  </IconCheck>
                </UnlockedColorSelected>
              )
                : (
              <UnlockedColor
                key={color.id}
                primary={color.color}
                secondary={color.secondColor}
                onClick={() => handleColorChange(color.id)}
              />
            )
          ))}
      </ColorPaletteStyle>
    </ColorPaletteContainer>
  );
};

export default ColorPalette;