import { useReducer, useState } from "react";

const initialState = {
  taskName: "",
  timer: null,
  date: 0,
  // endTime,
  //  saveTime
};
type InitialState = typeof initialState;
type TaskAction = {
  type: "Task" | "Timer" | "Date";
  value: string | number;
};

const reducer = (state: InitialState, action: TaskAction) => {
  switch (action.type) {
    case "Task":
      return state;
    default:
      return state;
  }
};

function useTask() {
  const [task, taskDispatch] = useReducer(reducer, initialState);
  const [countDown, setCountDown] = useState();

  // const { ipcRenderer } = window.require("electron");

  return {};
}

export default useTask;
