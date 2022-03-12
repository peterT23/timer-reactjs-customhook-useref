import "Your code here";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{"Your code here"}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={"Your code here"}>
            Stop
          </button>
          <button
            className="button"
            ref={"Your code here"}
            onClick={"Your code here"}
          >
            Start
          </button>
          <button className="button" onClick={"Your code here"}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
