import React from "react";
import GenericItem from "./GenericItem";
import { TaskType } from "utils/constants";

export interface GenericListProps {
  elements: TaskType[];
}

const GenericList = ({ elements }: GenericListProps) => {
  const handleClick = (id: string) => {
    console.log(id);
  };

  const handleAddItem = () => {
    console.log("I add something");
  };

  return (
    <div style={{}}>
      {elements.map((element) => {
        console.log(element);
        return (
          <GenericItem
            key={element._id}
            done={element.complete}
            text={element.task}
            color={element.tagColor ?? ""}
            handleClick={() => handleClick(element._id)}
          />
        );
      })}
      <div style={{ opacity: "0.5" }}>
        <GenericItem
          done={false}
          text={"Add Something..."}
          color={""}
          handleClick={() => handleAddItem()}
        />
      </div>
    </div>
  );
};

export default GenericList;
