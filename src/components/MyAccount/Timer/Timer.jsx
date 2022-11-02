import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./Timer.css";

const element = <FontAwesomeIcon icon={faClock} />;

const Timer = () => {
  const [timer, setTimer] = useState(0);

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const TimeStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const TimePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const TimeResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const TimeReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <h3>Study Timer</h3>
      <div className="stopwatch-card">
        <p>{formatTime()}</p>
        <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={TimeStart}>Start</button>
          ) : isPaused ? (
            <button onClick={TimePause}>Pause</button>
          ) : (
            <button onClick={TimeResume}>Resume</button>
          )}
          <button onClick={TimeReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Timer;
