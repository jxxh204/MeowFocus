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
const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.main};
  border: none;
`;

type Props = {
  text: string;
  focus: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleClick: React.FocusEventHandler<HTMLInputElement>;
};

function Input({ text, focus, handleChange, handleClick }: Props) {
  return (
    <InputWrapper>
      <img width={20} src={inputIcon} />
      <InputStyle
        value={text}
        disabled={focus}
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
