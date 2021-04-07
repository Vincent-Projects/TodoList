export type AccessLevelType = "FREE" | "PREMIUM" | "BELIEVER";

const FREE: AccessLevelType = "FREE";
const PREMIUM: AccessLevelType = "PREMIUM";
const BELIEVER: AccessLevelType = "BELIEVER";

export const ACCESSLEVEL = {
  FREE,
  PREMIUM,
  BELIEVER
};

export interface TaskType {
  _id: string,
  task: string,
  complete: boolean,
  userId: string,
  projectId?: string,
  tagColor?: string,
}