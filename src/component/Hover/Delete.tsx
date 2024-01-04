import styled from "styled-components";

const StyleDelete = styled.button``;

type Props = {
  handler: React.MouseEventHandler<HTMLButtonElement>;
};

function Delete({ handler }: Props) {
  return <StyleDelete onClick={handler}>삭제</StyleDelete>;
}

export default Delete;
