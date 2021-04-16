import React, { useState, useRef, useEffect } from "react";
import GenericItem from "./GenericItem";
import { TaskType } from "utils/constants";
import COLORS, { hexToColorId } from "utils/colors";
import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: rgb(var(--on-bg));
  padding: 0.2rem;
  padding-left: 2.5rem;
`;

const List = styled.div``;

export interface GenericListProps {
  elements: TaskType[];
  saveNewItem: (item: string) => void;
  updateComplete: (itemId: string, complete: boolean) => void;
  handleColorChange: (itemId: string, colorId: string) => void;
}

const GenericList = ({
  elements,
  saveNewItem,
  updateComplete,
  handleColorChange,
}: GenericListProps) => {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItemValue, setNewItemValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (id: string, complete: boolean) => {
    updateComplete(id, complete);
  };

  const handleAddItem = () => {
    setIsAddingItem(true);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      saveNewItem(newItemValue);
    }
  };

  const handleNewItemInput = (event: any) => {
    setNewItemValue(event.target.value);
  };

  useEffect(() => {
    if (isAddingItem && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddingItem]);

  const inputBlurHandler = () => {
    if (newItemValue !== "") {
      saveNewItem(newItemValue);
    } else {
      setIsAddingItem(false);
    }
  };

  return (
    <List>
      {elements.map((element) => {
        const hasColor = element.primaryTagColor || element.secondaryTagColor;
        let colorId;
        if (hasColor) {
          const primaryColorId = hexToColorId(element.primaryTagColor!);
          const secondaryColorId = hexToColorId(element.secondaryTagColor!);
          const color = COLORS.find(
            (c) =>
              c.color === primaryColorId.toString() &&
              c.secondColor === secondaryColorId.toString()
          );
          colorId = color?.id;
        }
        return (
          <GenericItem
            key={element._id}
            done={element.complete}
            text={element.task}
            color={colorId ?? ""}
            handleClick={() => handleClick(element._id, element.complete)}
            handleColorChange={(colorId) =>
              handleColorChange(element._id, colorId)
            }
          />
        );
      })}
      {!isAddingItem ? (
        <div style={{ opacity: "0.5" }}>
          <GenericItem
            done={false}
            text={"Add Something..."}
            color={""}
            handleClick={handleAddItem}
            handleColorChange={() => false}
            isNew
          />
        </div>
      ) : (
        <div>
          <Input
            ref={inputRef}
            style={{ backgroundColor: "transparent", border: "none" }}
            value={newItemValue}
            onChange={handleNewItemInput}
            onKeyPress={handleKeyPress}
            onBlur={inputBlurHandler}
          />
        </div>
      )}
    </List>
  );
};

export default GenericList;
