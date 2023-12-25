import React from "react";
import useTask from "./hooks/useTask";
import Form from "./component/Form";

function App() {
  const { text, isFocus, textHandler, handleSubmit } = useTask();
  return (
    <div className="App">
      <Form handler={handleSubmit}>
        <Form.Input text={text} focus={isFocus} handleChange={textHandler} />
        <Form.Submit focus={isFocus} />
      </Form>
    </div>
  );
}

export default App;
