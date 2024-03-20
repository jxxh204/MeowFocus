import styled from "styled-components";

const ButtonStyle = styled.button`
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 10px 42px;
  background-color: white;
  border: 1px solid;
  font-size: 16px;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.color.green[300]};
  }
`;

type Props = {
  value: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

function Button({ value, onClick, children }: Props) {
  return (
    <ButtonStyle onClick={onClick} value={value}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
