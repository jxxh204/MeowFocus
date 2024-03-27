import { useEffect, useState } from "react";

export function useTest(count: number) {
  const calculateElapsedTime = () => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + count * 60000); // Adding 20 minutes to the current time

    const elapsedMilliseconds = futureDate.getTime() - currentDate.getTime();
    const elapsedMinutes = Math.floor(elapsedMilliseconds / 60000);

    return elapsedMinutes;
  };

  const [elapsedMinutes, setElapsedMinutes] = useState(calculateElapsedTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedMinutes(calculateElapsedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return { elapsedMinutes };
}
