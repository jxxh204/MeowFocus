import styled from "styled-components";

const TodoStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.color.main};
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 12px;
  padding: 15px 0;
  font-size: medium;
  font-weight: bold;
`;
const ListIcon = styled.svg`
  padding: 0 15px;
`;

function Todo() {
  return (
    <TodoStyle>
      <ListIcon
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="4" fill="#222222" />
      </ListIcon>
      이력서 수정
    </TodoStyle>
  );
}

export default Todo;
