import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import { useState } from "react";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);
  const [dataLog, setDataLog] = useState([]);
  let timeData = formatTime(time);

  const saveHistory = () => {
    setDataLog((dataLog) => [...dataLog, timeData]);
  };
  const clearLog = () => {
    setDataLog([]);
  };
  return (
    <div className="App container">
      <h1>Timer</h1>

      <div className="timer__wrapper">
        {/* <div>
          <input type="radio" id="count-up" value="countup" name="count" />{" "}
          <label htmlFor="count-up">Count-up</label>
          <input
            type="radio"
            id="count-down"
            value="countdown"
            name="count"
          />{" "}
          <label htmlFor="count-down">Count-down</label>
        </div> */}
        <div className="timer__display">
          {/* <p>{"Your code here"}</p> */}
          <div className="time-title">
            <span>Hours</span>
            <span>Minutes</span>
            <span>Seconds</span>
          </div>
          <p>{timeData}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={saveHistory}>
            split
          </button>
        </div>
        <div className="display-history">
          <h3>Data Log</h3>

          <ol className="list-datalog">
            <button className="buttonbtn" onClick={clearLog}>
              Clear Log
            </button>
            {/* <li>{formatTime(time)}</li>
            <li>{formatTime(time)}</li>
            <li>{formatTime(time)}</li>
            <li>{formatTime(time)}</li> */}
            {dataLog.map((list, index) => (
              <li>{list}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
