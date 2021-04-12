import React from "react";
import styled from "styled-components";
import ColorPalette from "components/ColorPalette";
import COLORS from "utils/colors";
import withVisible, { VisibleProps } from "hooks/withVisible";
<<<<<<< HEAD
=======
import { sanitizeColorCSS } from "utils/colors";
>>>>>>> ac77eddd79ace189f6a40e38135e17682e45ced2

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
    ${(props: SelectContainerProps) => sanitizeColorCSS(props.primary)} 0% 48%,
    ${(props) => sanitizeColorCSS(props.secondary)} 52% 100%
  );
`;
/* 
interface ColorPaletteContainerProps {
  visible: boolean;
} */

const ColorPaletteContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  width: 10rem;
  height: 10rem;
  background-color: rgb(var(--bg-24dp));
  box-shadow: 1px 2px 1px rgb(var(--shadow));
  z-index: 10;
`;

interface ColorSelectProps extends VisibleProps {
  color: string;
}

const ColorSelect = ({
  color: colorId,
  isVisible,
  handleSetVisible,
  elementRef,
}: ColorSelectProps) => {
  const handleClick = () => {
    handleSetVisible();
  };

  const cancelParentClick = (event: any) => {
    event.stopPropagation();
  };

  const color = COLORS[+colorId - 1];

  return (
    <SelectContainer
      primary={color?.color}
      secondary={color?.secondColor}
      onClick={handleClick}
      ref={elementRef}
    >
      {isVisible ? (
        <ColorPaletteContainer onClick={cancelParentClick}>
          {/* Maybe change top 0 to auto */}
          <ColorPalette
            colors={COLORS}
            selectedColor={`${color?.id}`}
            handleColorChange={(color) => console.log(color)}
          />
        </ColorPaletteContainer>
      ) : null}
    </SelectContainer>
  );
};

export default withVisible(ColorSelect);
