import styled from "styled-components";

const SubmitStyle = styled.input`
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  border: 1px solid #f6f6f6;
  border-radius: 12px;
  padding: 10px 0;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function Submit() {
  return <SubmitStyle type="submit" data-testid="입력" />;
}

export default Submit;
