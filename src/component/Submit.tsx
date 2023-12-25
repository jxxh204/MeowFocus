import styled from "styled-components";

const SubmitStyle = styled.input`
  background: #f6f6f6;
  border: 1px solid #f6f6f6;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function Submit({ focus }: { focus: boolean }) {
  if (!focus) return <SubmitStyle type="submit" value="입력" />;
  return null;
}

export default Submit;
