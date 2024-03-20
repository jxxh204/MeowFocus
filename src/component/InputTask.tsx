import styled from "styled-components";

const InputTaskStyle = styled.input`
  color: gray;
  border: 1px solid ${({ theme }) => theme.border.color};
  border-radius: ${({ theme }) => theme.border.radius};
  width: 94%;
  padding: 10px 3%;
  margin-top: ${({ theme }) => theme.size.gap};
`;

function InputTask() {
  return <InputTaskStyle type="text" name="task_name" />;
}

export default InputTask;
