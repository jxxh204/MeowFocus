import { useEffect, useRef } from "react";
import useCountDown from "./useCountDown";
import CircularProgress from "./CircularProgress";
import CanvasCircular from "./CanvasCircular";

type Props = {
  count: number;
};

function CountDown({ count }: Props) {
  const { remainingTime, startCount, setTime } = useCountDown(count);
  useEffect(() => {
    setTime();
    startCount();
  }, []);

  return (
    <>
      <CircularProgress
        size={50}
        strokeWidth={25}
        percentage={remainingTime.progress}
      />
      <p>
        {remainingTime.minute} : {remainingTime.second}
      </p>
      <CanvasCircular
        size={50}
        strokeWidth={25}
        percentage={remainingTime.progress}
      />
    </>
  );
}

export default CountDown;
