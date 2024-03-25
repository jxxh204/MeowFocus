import { useState, useEffect, useRef } from "react";

export function useTimer(durationInMinutes: number) {
  const [remainingTime, setRemainingTime] = useState<number>(
    durationInMinutes * 60
  );
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isActive && remainingTime > 0) {
      intervalId.current = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      clearInterval(intervalId.current);
      setIsActive(false);
    }

    return () => clearInterval(intervalId.current);
  }, [isActive, remainingTime]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  return { remainingTime, startTimer, stopTimer };
}

export function formatTime(remainingTime: number): string {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}
