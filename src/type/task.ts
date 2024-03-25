export type TaskType = "SET_TASK" | "SET_NAME" | "SET_TIMER" | "SET_DATE";
export type TaskName = "TASK" | "TIMER" | "DATE";
export type TaskAction = {
  type: TaskType;
  name: TaskName;
  value: string | number;
};
