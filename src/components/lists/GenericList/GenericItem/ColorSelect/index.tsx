import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ColorPalette from "components/ColorPalette";
import COLORS from "utils/colors";

interface SelectContainerProps {
  primary: string;
  secondary: string;
}
const SelectContainer = styled.div`
  width: 6px;
  height: 100%;
  position: relative;
  background: linear-gradient(
    45deg,
    rgb(var(--color-${(props: SelectContainerProps) => props.primary ?? 'transparent'})) 0% 48%, 
    rgb(var(--color-${props => props.secondary ?? "transparent"})) 52% 100%
    );
`;

interface ColorPaletteContainerProps {
  visible: boolean;
}

const ColorPaletteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 10rem;
  height: 10rem;
  background-color: rgb(var(--bg-1dp));
  box-shadow: 1px 2px 1px rgb(var(--shadow));
  display: ${(props: ColorPaletteContainerProps) => props.visible ? "visible" : "none"};
  z-index: 10;
`;

interface ColorSelectProps {
  color: string;
}

const ColorSelect = ({ color: colorId }: ColorSelectProps) => {
  const [visible, setVisible] = useState(false);
  const refElement = useRef(null);

  /* useEffect(() => {
    document.addEventListener("click", resetVisible); // Problem: This will add as many event listner as duplication of this component
    return () => {
      document.removeEventListener("click", resetVisible);
    }
  }, []); */

  const handleClick = (event: any) => {
    event.stopPropagation();
    setVisible(!visible);
  }

  const resetVisible = (event: any) => {
    if (refElement.current && event.target === refElement) {
      alert("Click dans l'element");
    } else {
      alert("Click en dehors");
    }
    /* alert("Something")
    setVisible(false); */
  }

  const cancelParentClick = (event: any) => {
    event.stopPropagation();
  }

  let color = COLORS[+colorId - 1];

  return (
    <SelectContainer primary={color?.color} secondary={color?.secondColor} onClick={handleClick}>
      <ColorPaletteContainer ref={refElement} visible={visible} onClick={cancelParentClick}>{/* Maybe change top 0 to auto */}
        <ColorPalette
          colors={[]}
          selectedColor={""}
          handleColorChange={(color) => console.log(color)}
        />
      </ColorPaletteContainer>
    </SelectContainer>
  );
};

export default ColorSelect;

