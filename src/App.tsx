import React from "react";
import useTask from "./hooks/useTask";
import Input from "./page/Input";

function App() {
  const { task, onSubmit, onChange } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      <Input />
    </div>
  );
}

export default App;
