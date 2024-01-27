import React from "react";
import useTask from "./hooks/useTask";
import Task from "./component/Task";
import Hover from "./component/Hover";
import { FocusButton, Length } from "./component/Task/styles";

function App() {
  const {
    text,
    isClick,
    isFocusMode,
    textHandler,
    handleSubmit,
    handleDelete,
    isClickInput,
    handleKeyDown,
  } = useTask();
  // const { ipcRenderer } = window.require("electron");

  return (
    <div className="App">
      {/* 1. task => input,submit */}
      {/* 2. app => task.input, task.submit */}
      <Hover>
        <Hover.Edit />
        <Hover.Delete handler={handleDelete} />
      </Hover>

      {/* 코드가 너무 더럽다 */}
      <Task
        isClick={isClick}
        text={text}
        focus={isFocusMode}
        handler={handleSubmit}
      >
        <Task.Textarea
          $isWhiteColor={isClick}
          text={text}
          disabled={isFocusMode}
          handleChange={textHandler}
          handleClick={isClickInput}
          handleKeyDown={handleKeyDown}
        />

        {text || isClick ? (
          <Task.Bottom>
            <Length data-testid="text-length">{text.length}/50</Length>
            <FocusButton type="submit" value="포커스 모드 시작" />
          </Task.Bottom>
        ) : null}
      </Task>
      {/* <Timer /> */}
    </div>
  );
}

export default App;
