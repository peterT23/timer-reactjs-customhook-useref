import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  // const [time, setTime] = "Your code here";
  const [time, setTime] = useState(0);

  // const isStart = "Your code here";
  const isStart = useRef(false);
  // const active = "Your code here";
  const active = useRef(null);
  // const refInterval = "Your code here";
  const refInterval = useRef(0);

  const startTimer = () => {
    // "Your code here";

    isStart.current = true;
    active.current.disabled = true;
    refInterval.current = setInterval(() => {
      if (isStart) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    // "Your code here";
    isStart.current = false;
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    // "Your code here";
    active.current.disabled = false;
    setTime(0);
    clearInterval(refInterval.current);
    isStart.current = true;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
