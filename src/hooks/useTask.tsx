import { useState } from "react";

function useTask() {
  const [text, setText] = useState("");
  const [isFocusMode, setIsFocusMode] = useState(false);

  const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsFocusMode(!isFocusMode);
  };
  return { text, isFocusMode, textHandler, handleSubmit };
}

export default useTask;
