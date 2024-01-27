import styled from "styled-components";
import Textarea from "./Textarea";
import Bottom from "./Bottom";
import { StyleHover } from "../Hover";

type Props = {
  children: React.ReactNode;
  isClick: boolean;
  text: string;
  focus: boolean;
  handler: React.FormEventHandler<HTMLFormElement>;
};

type StyleFromProps = {
  $focusMode: boolean;
  $isClick: boolean;
  $background: boolean;
};

const StyleForm = styled.form<StyleFromProps>`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: ${({ theme, $background }) =>
    $background ? theme.color.clickColor : theme.color.main};
  font-size: 15px;
  font-weight: bold;
  padding: 20px;
  border-radius: 8px;

  filter: saturate(${(props) => (props.$isClick ? "80%" : "100%")});

  gap: 10px;
  &:hover {
    ${StyleHover} {
      display: ${(props) => (props.$focusMode ? "block" : "none")};
    }
  }
`;

function Task({ children, isClick, text, focus, handler }: Props) {
  // backgroundBlack props drilling으로 전달해보자.
  return (
    <StyleForm
      $background={isClick || text.length > 0 ? true : false}
      $isClick={isClick}
      $focusMode={focus}
      onSubmit={handler}
      data-testid="background-color"
    >
      {children}
    </StyleForm>
  );
}

Task.Textarea = Textarea;
Task.Bottom = Bottom;

export default Task;
