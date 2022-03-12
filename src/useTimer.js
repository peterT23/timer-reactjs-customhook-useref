import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = "Your code here";

  const isStart = "Your code here";
  const active = "Your code here";
  const refInterval = "Your code here";

  const startTimer = () => {
    "Your code here";
    active.current.disabled = true;
  };
  const stopTimer = () => {
    "Your code here";
  };
  const resetTimer = () => {
    "Your code here";
    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
