import React, { useState, useRef, useEffect } from "react";
import GenericItem from "./GenericItem";
import { TaskType } from "utils/constants";
import COLORS from "utils/colors";

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
  handleColorChange
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

  return (
    <div style={{}}>
      {elements.map((element) => {
        const hasColor = element.primaryTagColor || element.secondaryTagColor;
        let colorId;
        if(hasColor) {
          const color = COLORS.find(c => c.color === element.primaryTagColor && c.secondColor === element.secondaryTagColor);
          colorId = color?.id;
        }
        return (
          <GenericItem
            key={element._id}
            done={element.complete}
            text={element.task}
            color={colorId ?? ""}
            handleClick={() => handleClick(element._id, element.complete)}
            handleColorChange={(colorId) => handleColorChange(element._id, colorId)}
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
          />
        </div>
      ) : (
        <div>
          <input
            ref={inputRef}
            style={{ backgroundColor: "transparent", border: "none" }}
            value={newItemValue}
            onChange={handleNewItemInput}
            onKeyPress={handleKeyPress}
          />
        </div>
      )}
    </div>
  );
};

export default GenericList;
