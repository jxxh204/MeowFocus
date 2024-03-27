import { useEffect } from "react";
import styled from "styled-components";
import useCountDown from "./useCountDown";
import CircularProgress from "./CircularProgress";

type Props = {
  count: number;
};
type CounterUIProps = {
  progress: string;
};

const CounterUI = styled.div<CounterUIProps>`
  width: 36px;
  height: 36px;
  border: 1vh solid green;
  border-radius: 50%;

  background: conic-gradient(red, ${({ progress }) => progress}, gray);
`;

function CountDown({ count }: Props) {
  const { remainingTime, startCount, setTime } = useCountDown(count);
  useEffect(() => {
    setTime();
    startCount();
  }, []);

  return (
    <>
      {/* <CounterUI progress={remainingTime.progress}></CounterUI> */}
      <CircularProgress
        size={50}
        strokeWidth={25}
        percentage={remainingTime.progress}
      />
      <p>
        {remainingTime.minute} : {remainingTime.second}
      </p>
    </>
  );
}

export default CountDown;
