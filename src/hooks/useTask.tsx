import { useReducer, useRef, useState } from "react";

const initialState = {
  taskName: "",
  timer: null,
  date: 0,
  // endTime,
  //  saveTime
};
type InitialState = typeof initialState;
type TaskAction = {
  type: "SET_TASK" | "SET_NAME" | "SET_TIMER" | "SET_DATE";
  name: "taskName" | "timer" | "date";
  value: string | number;
};

const reducer = (state: InitialState, action: TaskAction) => {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, [action.name]: action.value };
    // case "SET_NAME":
    //   return { ...state, taskName: action.value };
    // case "SET_TIMER":
    //   return { ...state, timer: action.value };
    // case "SET_DATE":
    //   return { ...state, date: action.value };
    default:
      return state;
  }
};

function useTask() {
  const [task, taskDispatch] = useReducer(reducer, initialState);
  const [countDown, setCountDown] = useState();
  // const { ipcRenderer } = window.require("electron");
  const sampleFunc = () => {};

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
  };
  const onChangeTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    taskDispatch({ type: "SET_TIMER", name: "timer", value: e.target.value });
  };
  return { task, sampleFunc, onSubmit, onChangeTimer };
}

export default useTask;
