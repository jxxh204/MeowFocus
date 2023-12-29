import styled from "styled-components";
import Input from "./Input";
import Submit from "./Submit";
import { StyleHover } from "../Hover";

type Props = {
  children: React.ReactNode;
  focus: boolean;
  handler: React.FormEventHandler<HTMLFormElement>;
};
type StyleFromProps = {
  focusMode: boolean;
};
const StyleForm = styled.form<StyleFromProps>`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */

  gap: 10px;
  &:hover {
    ${StyleHover} {
      display: ${(props) => (props.focusMode ? "block" : "none")};
    }
  }
`;

function Task({ children, focus, handler }: Props) {
  return (
    <StyleForm focusMode={focus} onSubmit={handler}>
      {children}
    </StyleForm>
  );
}

Task.Input = Input;
Task.Submit = Submit;

export default Task;
