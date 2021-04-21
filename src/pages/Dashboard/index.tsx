import {
  addIntrant,
  addTaskToday,
  deleteTask,
  getTasks,
  updateColor,
  updateComplete,
} from "redux/actions";
import {
  INTRANT_FILTER,
  WEEK_GOALS_FILTER,
  TODAY_FILTER,
  filteredList
} from "utils/tasks";
import React, { useEffect } from "react";
import TaskType from "types/task";
import { connect } from "react-redux";
import styled from "styled-components";

const RowDesktop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 1024px) {
    & {
      flex-direction: row;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface SquareSpaceProps {
  height: number | string;
}

const SquareSpace = styled.div<SquareSpaceProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;

  @media only screen and (min-width: 1024px) {
    & {
      height: ${props => props.height}%;
    }
  }
`;

interface DashboardProps {
  tasks: TaskType[];
  addIntrant: (task: string) => void;
  getTasks: () => void;
  updateComplete: (itemId: string, complete: boolean) => void;
  updateColor: (itemId: string, colorId: string) => void;
  handleDelete: (itemId: string) => void;
  addTaskToday: (task: string) => void;
}

const Dashboard = ({
  tasks,
  addIntrant,
  addTaskToday,
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

  const WeekGoalsList = filteredList(
    tasks,
    WEEK_GOALS_FILTER,
    addIntrant,
    updateComplete,
    updateColor,
    handleDelete
  );

   const TodayList = filteredList(
    tasks,
    TODAY_FILTER,
    addTaskToday,
    updateComplete,
    updateColor,
    handleDelete
  );
  return (
    <div
      style={{
        borderRadius: "5px",
        padding: "0.6rem",
        height: "100%",
        width: "100%"
      }}
    >
      <RowDesktop>
        <Column>
          <SquareSpace height={55}>
            <h2 style={{ marginBottom: "1rem" }}>Today</h2>
            <TodayList />
          </SquareSpace>
        
          <SquareSpace height={45}>
            <h2 style={{ marginBottom: "1rem" }}>Week Goals</h2>
            <WeekGoalsList />
          </SquareSpace>
        </Column>
        <Column>
          { /* Here the calendar place */}
          <SquareSpace height={55}></SquareSpace>
          <SquareSpace height={45}>
            <h2 style={{ marginBottom: "1rem" }}>Inbox</h2>
            <IntrantList />
          </SquareSpace>
        </Column>
      </RowDesktop>
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
    addTaskToday: (task: string) => dispatch(addTaskToday(task)),
    updateComplete: (itemId: string, complete: boolean) =>
      dispatch(updateComplete(itemId, complete)),
    updateColor: (itemId: string, colorId: string) =>
      dispatch(updateColor(itemId, colorId)),
    handleDelete: (itemId: string) => dispatch(deleteTask(itemId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
