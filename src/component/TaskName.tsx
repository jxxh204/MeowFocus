import styled from "styled-components";

const TaskNameStyle = styled.input`
  color: gray;
  border: 1px solid gray;
  border-radius: 6px;
  width: 100%;
`;

function TaskName() {
  return <TaskNameStyle type="text" name="taskname" />;
}

export default TaskName;
