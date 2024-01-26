import styled from "styled-components";

const BottomStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Bottom({ children }: { children: React.ReactNode }) {
  return <BottomStyle>{children}</BottomStyle>;
}

export default Bottom;
