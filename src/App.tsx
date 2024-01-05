import React from "react";
import useTask from "./hooks/useTask";
import Task from "./component/Task";
import Hover from "./component/Hover";

function App() {
  const {
    text,
    isClick,
    isFocusMode,
    textHandler,
    handleSubmit,
    handleDelete,
    isClickInput,
  } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      {/* 1. task => input,submit */}
      {/* 2. app => task.input, task.submit */}
      <Task isClick={isClick} focus={isFocusMode} handler={handleSubmit}>
        <Hover>
          <Hover.Edit />
          <Hover.Delete handler={handleDelete} />
        </Hover>
        <Task.Input
          text={text}
          focus={isFocusMode}
          handleChange={textHandler}
          handleClick={isClickInput}
        />
        <Task.Bottom isClick={isClick} focus={isFocusMode} text={text} />
      </Task>
      {/* <Timer /> */}
    </div>
  );
}

export default App;
