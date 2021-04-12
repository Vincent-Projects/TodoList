import React, { useState, useRef, useEffect } from "react";
import GenericItem from "./GenericItem";
import { TaskType } from "utils/constants";

export interface GenericListProps {
  elements: TaskType[];
  saveNewItem: (item: string) => void;
  updateComplete: (itemId: string, complete: boolean) => void;
}

const GenericList = ({ elements, saveNewItem, updateComplete }: GenericListProps) => {
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
        return (
          <GenericItem
            key={element._id}
            done={element.complete}
            text={element.task}
            color={element.tagColor ?? ""}
            handleClick={() => handleClick(element._id, element.complete)}
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
