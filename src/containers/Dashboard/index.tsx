import React from "react";
import { connect } from "react-redux";
import GenericList from "components/lists/GenericList";
import { TaskType } from "utils/constants";

interface DashboardProps {
  tasks: TaskType[];
}

const Dashboard = ({ tasks }: DashboardProps) => {
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
        <h2 style={{marginBottom: "1rem"}}>Today</h2>
        <GenericList elements={tasks} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps)(Dashboard);
