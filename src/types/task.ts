interface TaskType {
  _id: string;
  task: string;
  complete: boolean;
  userId: string;
  archived?: boolean; // @deprecated
  projectId?: string;
  primaryTagColor?: string;
  secondaryTagColor?: string;
  startedRecuringTime?: Date;
  recuringTime?: Date;
  recuringDate?: Date;
  recuringDay?: number;
  recuringWeekDay?: string;
  dueDate?: Date;
  createdAt: Date;
  lastUpdate: Date;
}

export default TaskType;