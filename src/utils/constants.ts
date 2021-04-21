export interface TaskType {
  _id: string;
  task: string;
  complete: boolean;
  userId: string;
  projectId?: string;
  primaryTagColor?: string;
  secondaryTagColor?: string;
}

export const passwordRequirements =
  "( at least 8 characters, 1 uppercase, 1 lowercase, 1 digit, 1 special(@$&%#§!?) )";

// Projects ID For Goals
export const WEEK_GOAL = "__WEEK";
export const MONTH_GOAL = "__MONTH";
export const YEAR_GOAL = "__YEAR";
