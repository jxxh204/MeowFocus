import React from "react";
import useTask from "./hooks/useTask";
import Task from "./component/Task";
import Hover from "./component/Hover";

function App() {
  const { text, isFocusMode, textHandler, handleSubmit } = useTask();
  return (
    <div className="App">
      <Task focus={isFocusMode} handler={handleSubmit}>
        <Hover>
          <Hover.Edit />
          <Hover.Delete />
        </Hover>
        <Task.Input
          text={text}
          focus={isFocusMode}
          handleChange={textHandler}
        />
        <Task.Submit focus={isFocusMode} />
      </Task>
    </div>
  );
}

export default App;
