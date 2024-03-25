import React from "react";
import useTask from "./hooks/useTask";
import { TaskProvider } from "context/Task";
import { HashRouter } from "react-router-dom";
import Router from "router/router";

function App() {
  const { task, onChange } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      <TaskProvider value={task} onChangeHandler={onChange}>
        <HashRouter>
          <Router />
        </HashRouter>
      </TaskProvider>
    </div>
  );
}

export default App;
