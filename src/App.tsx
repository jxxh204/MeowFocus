import React from "react";
import Title from "./component/Title";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <Title />
      <TodoList>
        <TodoList.Todo />
        <TodoList.Add />
      </TodoList>
    </div>
  );
}

export default App;
