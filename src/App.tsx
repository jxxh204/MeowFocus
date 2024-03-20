import React from "react";
import useTask from "./hooks/useTask";
import Header from "./component/Header";
import InputTask from "./component/InputTask";
import Main from "./component/Main";
import Button from "./component/Button";
import SelectTime from "./component/SelectTime";
import CountDown from "./component/CountDown";
import Radio from "./component/Radio";

function App() {
  const { task, sampleFunc, onSubmit } = useTask();
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
        <SelectTime>
          <Radio name="time" id="20">
            20분
          </Radio>
          <Radio name="time" id="40">
            40분
          </Radio>
          <Radio name="time" id="60">
            60분
          </Radio>
        </SelectTime>

        <input type="submit" value="집중시작" />
        {/* taskDispatch */}
      </Main>
    </div>
  );
}

export default App;
