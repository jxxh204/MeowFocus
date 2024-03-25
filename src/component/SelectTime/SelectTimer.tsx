import { ReactNode } from "react";
import styled from "styled-components";
import { SelectTimerProvider } from "./context";

const SelectTimeStyle = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: ${({ theme }) => theme.size.gap};
`;

type Props = {
  children: ReactNode;
  value: null | number;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function SelectTimer({ children, ...reset }: Props) {
  return (
    <SelectTimeStyle>
      <SelectTimerProvider value={reset}>{children}</SelectTimerProvider>
    </SelectTimeStyle>
  );
}

export default SelectTimer;
