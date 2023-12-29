import React from "react";
import useTask from "./hooks/useTask";
import Task from "./component/Task";

function App() {
  const { text, isFocus, textHandler, handleSubmit } = useTask();
  return (
    <div className="App">
      <Task handler={handleSubmit}>
        <Hover>
          <Hover.Edit />
          <Hover.Delete />
        </Hover>
        <Task.Input text={text} focus={isFocus} handleChange={textHandler} />
        <Task.Submit focus={isFocus} />
      </Task>
    </div>
  );
}

export default App;
