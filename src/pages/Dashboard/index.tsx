import {
  addIntrant,
  deleteTask,
  getTasks,
  updateColor,
  updateComplete,
} from "redux/actions";
import { INTRANT_FILTER, filteredList } from "utils/tasks";
import React, { useEffect } from "react";
import { TaskType } from "utils/constants";
import { connect } from "react-redux";

interface DashboardProps {
  tasks: TaskType[];
  addIntrant: (task: string) => void;
  getTasks: () => void;
  updateComplete: (itemId: string, complete: boolean) => void;
  updateColor: (itemId: string, colorId: string) => void;
  handleDelete: (itemId: string) => void;
}

const Dashboard = ({
  tasks,
  addIntrant,
  getTasks,
  updateComplete,
  updateColor,
  handleDelete,
}: DashboardProps) => {
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const IntrantList = filteredList(
    tasks,
    INTRANT_FILTER,
    addIntrant,
    updateComplete,
    updateColor,
    handleDelete
  );
  return (
    <div
      style={{
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "1rem" }}>Today</h2>
        <IntrantList />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks.tasks,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getTasks: () => dispatch(getTasks()),
    addIntrant: (task: string) => dispatch(addIntrant(task)),
    updateComplete: (itemId: string, complete: boolean) =>
      dispatch(updateComplete(itemId, complete)),
    updateColor: (itemId: string, colorId: string) =>
      dispatch(updateColor(itemId, colorId)),
    handleDelete: (itemId: string) => dispatch(deleteTask(itemId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
