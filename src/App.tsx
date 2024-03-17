import React from "react";
import useTask from "./hooks/useTask";
import Header from "./component/Header";
import TaskName from "./component/TaskName";

function App() {
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      <Header name="작업 이름" />

      <Main onSubmit={}>
        <TaskName />
        <Button name="작업완료" /> {/* localstorage 저장 */}
        <ConutDown /> {/* taskDispatch => selectTime */}
        <SelectTime>
          <Button name="20분" onClick={} />
          <Button name="40분" onClick={} />
          <Button name="60분" onClick={} />
        </SelectTime>
        <Submit name="직중시작" /> {/* taskDispatch */}
      </Main>
    </div>
  );
}

export default App;
