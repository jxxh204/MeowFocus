import React from "react";
import Button from "component/Button";
import InputTask from "component/InputTask";
import Main from "component/Main";
import SelectTimer from "component/SelectTime/SelectTimer";
import Time from "component/SelectTime/Time";
import Header from "component/Header";
import useTask from "hooks/useTask";

function Input() {
  const { task, onSubmit, onChange } = useTask();
  return (
    <>
      <Header name="작업 이름" />
      <Main onSubmit={onSubmit}>
        <InputTask name="taskName" onChange={onChange} />

        <SelectTimer value={task.timer} name="timer" onChange={onChange}>
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
