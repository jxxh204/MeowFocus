import { useState } from "react";

function useTask() {
  const [text, setText] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);

  const { ipcRenderer } = window.require("electron");

  let minRows = 1;

  const isClickInput = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (e.type === "focus") {
      setIsClick(true);
      ipcRenderer.send("textfield-available");
    }
    if (e.type === "blur") {
      setIsClick(false);
      ipcRenderer.send("textfield-disable");
    }
  };

  const textHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let scrollHeight = event.currentTarget.scrollHeight;
    if (event.currentTarget.value.length > 50) {
      return setText(text);
    }
    event.currentTarget.rows = Math.max(minRows, Math.ceil(scrollHeight / 20));

    setText(event.currentTarget.value);
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsFocusMode(true);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      setIsFocusMode(true);
    }
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
    handleKeyDown,
    handleDelete,
    isClickInput,
  };
}

export default useTask;
