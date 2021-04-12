import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addIntrant, getTasks, updateComplete } from "redux/actions";
import { filteredList, INTRANT_FILTER } from "utils/tasks";
import { TaskType } from "utils/constants";

interface DashboardProps {
  tasks: TaskType[];
  addIntrant: (task: string) => void;
  getTasks: () => void;
  updateComplete: (itemId: string, complete: boolean) => void;
}

const Dashboard = ({ tasks, addIntrant, getTasks, updateComplete }: DashboardProps) => {
  useEffect(() => {
    getTasks();
  }, []);
  const IntrantList = filteredList(tasks, INTRANT_FILTER, addIntrant, updateComplete);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
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
    updateComplete: (itemId: string, complete: boolean) => dispatch(updateComplete(itemId, complete)) 
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
