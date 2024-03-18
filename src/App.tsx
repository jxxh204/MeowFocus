import React from "react";
import useTask from "./hooks/useTask";
import Header from "./component/Header";
import InputTask from "./component/InputTask";
import Main from "./component/Main";
import Button from "./component/Button";
import SelectTime from "./component/SelectTime";
import CountDown from "./component/CountDown";

function App() {
  const { sampleFunc } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      <Header name="작업 이름" />

      <Main onSubmit={sampleFunc}>
        <InputTask />
        <Button name="작업완료" onClick={sampleFunc} />{" "}
        {/* localstorage 저장 */}
        <CountDown /> {/* taskDispatch => selectTime */}
        <SelectTime>
          <Button name="20분" onClick={sampleFunc} />
          <Button name="40분" onClick={sampleFunc} />
          <Button name="60분" onClick={sampleFunc} />
        </SelectTime>
        <Button name="직중시작" type="submit" /> {/* taskDispatch */}
      </Main>
    </div>
  );
}

export default App;
