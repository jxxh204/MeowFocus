import styled from "styled-components";

const InputTaskStyle = styled.input`
  color: gray;
  border: 1px solid gray;
  border-radius: ${({ theme }) => theme.border.radius};
  width: 94%;
  padding: 10px 3%;
`;

function InputTask() {
  return <InputTaskStyle type="text" name="task_name" />;
}

export default InputTask;
