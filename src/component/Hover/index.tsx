import styled from "styled-components";
import Delete from "./Delete";
import Edit from "./Edit";

export const StyleHover = styled.section`
  display: none;
`;

function Hover({ children }: { children: React.ReactNode }) {
  return <StyleHover>{children}</StyleHover>;
}

Hover.Edit = Edit;
Hover.Delete = Delete;

export default Hover;
