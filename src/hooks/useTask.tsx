import { useState } from "react";

function useTask() {
  const [text, setText] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsFocus(!isFocus);
  };
  return { text, isFocus, textHandler, handleSubmit };
}

export default useTask;
