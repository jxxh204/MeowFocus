import styled from "styled-components";

const InputStyle = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  background: ${({ theme }) => theme.color.main};
  border: 1px solid ${({ theme }) => theme.color.main};
  border-radius: 8px;
  padding: 12px;
  font-size: medium;
  font-weight: bold;
`;

type Props = {
  text: string;
  focus: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({ text, focus, handleChange }: Props) {
  return (
    <InputStyle
      value={text}
      disabled={focus}
      onChange={handleChange}
      type="text"
      placeholder="지금 집중할 일을 적어주세요."
    />
  );
}

export default Input;
