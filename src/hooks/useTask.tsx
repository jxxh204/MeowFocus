import { useReducer, useRef, useState } from "react";

const initialState = {
  // 전역으로 돌려야할듯.
  taskName: "",
  timer: null,
  date: 0,
  // endTime,
  //  saveTime
};
type InitialState = typeof initialState;

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task.taskName) return alert("태스크를 입력해주세요.");

    if (!task.timer) return alert("time을 선택해주세요.");
    // 유효성 검사.
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as TaskName;
    taskDispatch({
      type: `SET_${name}`,
      name: name,
      value: e.target.value,
    });
  };
  return { task, onSubmit, onChange };
}

export default useTask;
