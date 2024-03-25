import styled from "styled-components";

const TimeWrapper = styled.div`
  display: flex;
`;
const TimeInput = styled.input`
  display: none;

  &:checked + label {
    background-color: gray;
  }
`;
const TimeLabel = styled.label`
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
  children: string;
  name: string;
  id: string;
  onChange?: () => void;
};

function Time({ children, name, id, onChange }: Props) {
  return (
    <TimeWrapper>
      <TimeInput type="time" name={name} id={id} onChange={onChange} />
      <TimeLabel htmlFor={id}>{children}</TimeLabel>
    </TimeWrapper>
  );
}

export default Time;
