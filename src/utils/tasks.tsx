import React from "react";
import { TaskType } from "./constants";
import GenericList from "components/lists/GenericList";

export const INTRANT_FILTER = (task: TaskType) => {
  return task !== null;
};

export const filteredList = (
  tasks: TaskType[],
  filter: (task: TaskType) => boolean,
  handleSave: (value: string) => void,
  handleComplete: (itemId: string, complete: boolean) => void
) => {
  const items = tasks.filter(filter);
  /* eslint-disable react/display-name */
  return () => {
    return <GenericList elements={items} saveNewItem={handleSave} updateComplete={handleComplete} />;
  };
  /* eslint-enable react/display-name */
};
