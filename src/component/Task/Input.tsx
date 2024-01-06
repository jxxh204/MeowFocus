import styled from "styled-components";
import inputIcon from "../../asset/inputIcon.svg";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.main};
  gap: 10px;
`;
type InputProps = { isClick: boolean };
const InputStyle = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  background: ${({ theme, isClick }) =>
    isClick ? theme.color.clickColor : theme.color.main};
  border: none;
  color: ${({ isClick }) => (isClick ? "white" : "black")};
  filter: saturate(80%);
`;

type Props = {
  text: string;
  isClick: boolean;
  focus: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: React.FocusEventHandler<HTMLInputElement>;
};

function Input({ text, isClick, focus, handleChange, handleClick }: Props) {
  return (
    <InputWrapper>
      <img width={20} src={inputIcon} />
      <InputStyle
        value={text}
        disabled={focus}
        isClick={isClick}
        onChange={handleChange}
        onFocus={handleClick}
        onBlur={handleClick}
        type="text"
        placeholder="집중이 필요한 일 한가지를 적어주세요."
      />
    </InputWrapper>
  );
}

export default Input;
