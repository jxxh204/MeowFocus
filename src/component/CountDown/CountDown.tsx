import { useEffect } from "react";
import styled from "styled-components";
import useCountDown from "./useCountDown";

type Props = {
  date: number;
  count: number;
};
type CounterUIProps = {
  progress: number;
};

const CounterUI = styled.div<CounterUIProps>`
  width: 36px;
  height: 36px;
  border: 1vh solid green;
  border-radius: 50%;

  background: conic-gradient(red, ${({ progress }) => progress}, gray);
`;

function CountDown({ date, count }: Props) {
  const { remainingTime, startCount, setTime } = useCountDown(count);
  useEffect(() => {
    setTime();
    startCount();
  }, []);

  return (
    <>
      <CounterUI progress={remainingTime.progress}></CounterUI>
      {remainingTime.minute} : {remainingTime.second}
    </>
  );
}

export default CountDown;
