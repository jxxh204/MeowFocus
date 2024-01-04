import { useState } from "react";

function useTask() {
  const [text, setText] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);

  const isClickInput = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.type === "focus") {
      setIsClick(true);
    }
    if (e.type === "blur") {
      setIsClick(false);
    }
  };

  const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsFocusMode(true);
  };
  const handleDelete = () => {
    setIsFocusMode(false);
    setText("");
  };
  return {
    text,
    isClick,
    isFocusMode,
    textHandler,
    handleSubmit,
    handleDelete,
    isClickInput,
  };
}

export default useTask;
