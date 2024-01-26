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

const ImageStyle = styled.img`
  width: 20px;
  margin-bottom: 14px;
`;

type InputProps = { $isWhiteColor: boolean };

const InputStyle = styled.textarea<InputProps>`
  width: 100%;
  /* padding: 10px; */

  background: ${({ theme, $isWhiteColor }) =>
    $isWhiteColor ? theme.color.clickColor : theme.color.main};
  border: none;
  color: ${({ $isWhiteColor }) => ($isWhiteColor ? "white" : "black")};
  filter: saturate(80%);
  &:focus {
    outline: none;
  }
  resize: none;
  overflow-y: none;
`;

type Props = {
  text: string;
  $isWhiteColor: boolean;
  disabled: boolean;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  handleClick: React.FocusEventHandler<HTMLTextAreaElement>;
  handleKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

function Input({
  text,
  $isWhiteColor,
  disabled,
  handleChange,
  handleClick,
  handleKeyDown,
}: Props) {
  return (
    <InputWrapper>
      <ImageStyle src={inputIcon} />
      <InputStyle
        value={text}
        disabled={disabled}
        $isWhiteColor={$isWhiteColor}
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
