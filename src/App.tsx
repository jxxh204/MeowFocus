import React from "react";
import useTask from "./hooks/useTask";
import Input from "./page/Input";
import { TaskProvider } from "context/Task";

function App() {
  const { task, onChange } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      <TaskProvider value={task} onChangeHandler={onChange}>
        <Input />
      </TaskProvider>
    </div>
  );
}

export default App;
