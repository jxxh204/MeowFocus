import styled from "styled-components";

const ButtonStyle = styled.input`
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 10px 40px;
  background-color: white;
  border: 1px solid;
  font-size: 14px;
`;

type Props = {
  name: string;
  type?: "submit";
  onClick?: () => void;
};

function Button({ name, type, onClick }: Props) {
  return (
    <ButtonStyle type={type ? type : "button"} value={name} onClick={onClick} />
  );
}

export default Button;
