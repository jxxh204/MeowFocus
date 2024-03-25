import React from "react";
import Button from "component/Button";
import InputTask from "component/InputTask";
import Main from "component/Main";
import SelectTimer from "component/SelectTime/SelectTimer";
import Time from "component/SelectTime/Time";
import Header from "component/Header";

import { useTaskChangeContext, useTaskContext } from "context/Task";
import { useNavigate } from "react-router-dom";

function Input() {
  const task = useTaskContext();
  const changeContext = useTaskChangeContext();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task?.timer);
    if (!task?.taskName) return alert("태스크를 입력해주세요.");

    if (!task?.timer) return alert("time을 선택해주세요.");
    // 유효성 검사.

    navigate("/focus");
  };
  return (
    <>
      <Header name="작업 이름" />
      <Main onSubmit={onSubmit}>
        <InputTask name="taskName" onChange={changeContext?.onChange} />

        <SelectTimer
          value={task?.timer}
          name="timer"
          onChange={changeContext?.onChange}
        >
          <Time value="20">20분</Time>
          <Time value="40">40분</Time>
          <Time value="60">60분</Time>
        </SelectTimer>

        <Button type="submit" name="집중 시작!" />

        {/* taskDispatch */}
      </Main>
    </>
  );
}

export default Input;
