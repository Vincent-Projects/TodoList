import React from "react";
import { connect } from "react-redux";
import { addIntrant } from "redux/actions";
import { filteredList, INTRANT_FILTER } from "utils/tasks";
import { TaskType } from "utils/constants";

interface DashboardProps {
  tasks: TaskType[];
  addIntrant: (task: string) => void;
}

const Dashboard = ({ tasks, addIntrant }: DashboardProps) => {
  const IntrantList = filteredList(tasks, INTRANT_FILTER, addIntrant);
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
        <h2>Today</h2>
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
    addIntrant: (task: string) => dispatch(addIntrant(task))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
