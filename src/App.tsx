import React from "react";
import useTask from "./hooks/useTask";
import Header from "./component/Header";
import InputTask from "./component/InputTask";
import Main from "./component/Main";
import Button from "./component/Button";
import SelectTimer from "./component/SelectTime/SelectTimer";
import Time from "./component/SelectTime/Time";

function App() {
  const { task, onSubmit, onChange } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      <Header name="작업 이름" />

      <Main onSubmit={onSubmit}>
        <InputTask name="taskName" onChange={onChange} />

        <SelectTimer value={task.timer} name="timer" onChange={onChange}>
          <Time value="20">20분</Time>
          <Time value="40">40분</Time>
          <Time value="60">60분</Time>
        </SelectTimer>

        <Button type="submit" name="집중 시작!" />

        {/* taskDispatch */}
      </Main>
    </div>
  );
}

export default App;
