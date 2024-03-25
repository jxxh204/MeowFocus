import { useTaskContext } from "context/TaskContext";
import styled from "styled-components";

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
  const task = useTaskContext();
  return (
    <DefaultTaskWrap>
      <DefaultTaskStyle>{task.taskName}</DefaultTaskStyle>
    </DefaultTaskWrap>
  );
}
export function FocusControl() {
  return <>focus control</>;
}
