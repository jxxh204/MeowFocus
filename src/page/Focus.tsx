import { useStorage } from "context/TaskContext";
import styled from "styled-components";
import { formatTime, useTimer } from "../hooks/Timer";
import { useEffect } from "react";

const DefaultTaskWrap = styled.section`
  width: 100%;
`;

const DefaultTaskStyle = styled.div`
  border-radius: ${({ theme }) => theme.border.radius};
  border: 1px solid ${({ theme }) => theme.border.color};
  background: #272727;
  color: white;
  padding: 12px 8px;
`;

export function FocusDefault() {
  const { storage } = useStorage();
  const { startTimer, remainingTime } = useTimer(storage.timer);
  useEffect(() => {
    startTimer();
  }, []);
  return (
    <DefaultTaskWrap>
      <DefaultTaskStyle>{storage.taskName}</DefaultTaskStyle>
      <>{formatTime(remainingTime)}</>
    </DefaultTaskWrap>
  );
}
export function FocusControl() {
  return <>focus control</>;
}
