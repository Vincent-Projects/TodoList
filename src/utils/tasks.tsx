import GenericList from "components/lists/GenericList";
import React from "react";
import TaskType from "types/task";
import { isToday } from "utils/date";
import { WEEK_GOAL } from "./constants";

export const INTRANT_FILTER = (task: TaskType) => {
  return task.dueDate === null && task.projectId === null;
};

export const WEEK_GOALS_FILTER = (task: TaskType) => {
  return task.projectId ? task.projectId === WEEK_GOAL : false;
};

export const TODAY_FILTER = (task: TaskType) => {
  return task.dueDate ? isToday(new Date(task.dueDate)) : false;
};

export const filteredList = (
  tasks: TaskType[],
  filter: (task: TaskType) => boolean,
  handleSave: (value: string) => void,
  handleComplete: (itemId: string, complete: boolean) => void,
  handleColorChange: (itemId: string, colorId: string) => void,
  handleDelete: (itemId: string) => void
) => {
  const items = tasks.filter(filter);
  /* eslint-disable react/display-name */
  return () => {
    return (
      <GenericList
        elements={items}
        saveNewItem={handleSave}
        updateComplete={handleComplete}
        handleColorChange={handleColorChange}
        deleteTask={handleDelete}
      />
    );
  };
  /* eslint-enable react/display-name */
};
