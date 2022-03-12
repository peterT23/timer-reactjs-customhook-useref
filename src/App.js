import { useRef, useState } from "react";

const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

function App() {
  const [time, setTime] = useState(0);
  const isStart = useRef(true);
  const active = useRef();

  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    isStart.current = false;
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    setTime(0);
    clearInterval(refInterval.current);
  };

  return (
    <div className="App">
      <div className="button__wrapper">
        <button onClick={stopTimer}>Stop</button>
        <button ref={active} onClick={startTimer}>
          Start
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div className="timer">Current : {formatTime(time)}</div>
    </div>
  );
}

export default App;
