import styled from "styled-components";
import inputIcon from "../../asset/inputIcon.svg";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  /* border: 1px solid ${({ theme }) => theme.color.main}; */
  gap: 10px;
`;
type InputProps = { isClick: boolean };
const InputStyle = styled.textarea<InputProps>`
  width: 100%;
  height: auto;
  /* padding: 10px; */

  background: ${({ theme, isClick }) =>
    isClick ? theme.color.clickColor : theme.color.main};
  border: none;
  color: ${({ isClick }) => (isClick ? "white" : "black")};
  filter: saturate(80%);
  &:focus {
    outline: none;
  }
  resize: none;
  overflow-y: none;
`;

type Props = {
  text: string;
  isClick: boolean;
  focus: boolean;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleClick: React.FocusEventHandler<HTMLTextAreaElement>;
  handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

function Input({
  text,
  isClick,
  focus,
  handleChange,
  handleClick,
  handleKeyDown,
}: Props) {
  return (
    <InputWrapper>
      <img width={20} src={inputIcon} />
      <InputStyle
        value={text}
        rows={1}
        disabled={focus}
        isClick={isClick}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={handleClick}
        onBlur={handleClick}
        placeholder="집중이 필요한 일 한가지를 적어주세요."
        // maxLength={50}
      />
    </InputWrapper>
  );
}

export default Input;
