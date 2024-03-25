import { InitialState } from "hooks/useTask";
import React, { createContext, useContext } from "react";
import { T_ChangeHandler } from "type/task";

type ProviderProps = {
  children: React.ReactNode;
  value: InitialState;
  onChangeHandler: T_ChangeHandler;
};

const TaskContext = createContext<InitialState | null>(null);
const TaskChangeContext = createContext<null | T_ChangeHandler>(null);

function TaskProvider({ children, value, onChangeHandler }: ProviderProps) {
  return (
    <TaskContext.Provider value={value}>
      <TaskChangeContext.Provider value={onChangeHandler}>
        {children}
      </TaskChangeContext.Provider>
    </TaskContext.Provider>
  );
}

function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Task 컨텍스트 없음.");
  }

  return context;
}

function useTaskChangeContext() {
  const onChange = useContext(TaskChangeContext);
  if (!onChange) {
    throw new Error("TaskChange 컨텍스트 없음.");
  }
  return { onChange };
}

export { TaskProvider, useTaskContext, useTaskChangeContext };
