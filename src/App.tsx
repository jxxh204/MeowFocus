import React from "react";
import useTask from "./hooks/useTask";
import Header from "./component/Header";
import InputTask from "./component/InputTask";
import Main from "./component/Main";
import Button from "./component/Button";
import SelectTimer from "./component/SelectTime/SelectTimer";
import CountDown from "./component/CountDown";
import Time from "./component/SelectTime/Time";

function App() {
  const { task, sampleFunc, onSubmit, onChangeTimer } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      <Header name="작업 이름" />

      <Main onSubmit={onSubmit}>
        <InputTask />
        {/* <Button name="작업완료" onClick={sampleFunc} />{" "} */}
        {/* localstorage 저장 */}

        {/* <CountDown /> */}
        {/* taskDispatch => selectTime */}
        <SelectTimer value={task.timer} name="timer" onChange={onChangeTimer}>
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
