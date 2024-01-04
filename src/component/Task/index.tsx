import styled from "styled-components";
import Input from "./Input";
import Bottom from "./Bottom";
import { StyleHover } from "../Hover";

type Props = {
  children: React.ReactNode;
  isClick: boolean;
  focus: boolean;
  handler: React.FormEventHandler<HTMLFormElement>;
};
type StyleFromProps = {
  focusMode: boolean;
  isClick: boolean;
};
const StyleForm = styled.form<StyleFromProps>`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  fill-opacity: ${(props) => (props.isClick ? "80%" : "100%")};
  gap: 10px;
  &:hover {
    ${StyleHover} {
      display: ${(props) => (props.focusMode ? "block" : "none")};
    }
  }
`;

function Task({ children, isClick, focus, handler }: Props) {
  return (
    <StyleForm
      isClick={isClick}
      focusMode={focus}
      onSubmit={handler}
      data-testid="background-color"
    >
      {children}
    </StyleForm>
  );
}

Task.Input = Input;
Task.Bottom = Bottom;

export default Task;
