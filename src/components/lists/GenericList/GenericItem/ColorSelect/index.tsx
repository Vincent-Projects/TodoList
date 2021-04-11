import React, { useRef } from "react";
import styled from "styled-components";
import ColorPalette from "components/ColorPalette";
import COLORS from "utils/colors";
import withVisible, { VisibleProps } from "hooks/withVisible";
import { sanitizeColorCSS } from "utils/colors";

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
}: ColorSelectProps) => {
  /* const [visible, setVisible] = useState(false); */
  const refElement = useRef(null);

  /* useEffect(() => {
    document.addEventListener("click", resetVisible); // Problem: This will add as many event listner as duplication of this component
    return () => {
      document.removeEventListener("click", resetVisible);
    }
  }, []); */

  const handleClick = (event: any) => {
    event.stopPropagation();
    handleSetVisible();
  };

  /* const resetVisible = (event: any) => {
    if (refElement.current && event.target === refElement) {
      alert("Click dans l'element");
    } else {
      alert("Click en dehors");
    }
    alert("Something")
    setVisible(false); 
  }; */

  const cancelParentClick = (event: any) => {
    event.stopPropagation();
  };

  const color = COLORS[+colorId - 1];
  console.log(colorId);

  return (
    <SelectContainer
      primary={color?.color}
      secondary={color?.secondColor}
      onClick={handleClick}
    >
      {isVisible ? (
        <ColorPaletteContainer ref={refElement} onClick={cancelParentClick}>
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
