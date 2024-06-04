import React, { useState, useEffect } from "react";
import "../../assets/styles/pages.css";
import PomodoroButton from "./PomodoroTimer";

const Timer = ({ initialTime, label }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [endTime, setEndTime] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [running, setRunning] = useState(false);

  const startTimer = (seconds) => {
    clearInterval(intervalId);
    const then = Date.now() + seconds * 1000;

    displayTimeLeft(seconds);
    displayEndTime(then);

    const id = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(intervalId);
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);

    setIntervalId(id);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setTimeLeft("");
    setEndTime("");
    setRunning(false);
  };

  const displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
      remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;
    setTimeLeft(display);
  };

  const displayEndTime = (timestamp) => {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    setEndTime(
      `Be Back At ${adjustedHour}:${minutes < 10 ? "0" : ""}${minutes}`
    );
  };

  const handleTimerButtonClick = (seconds) => {
    if (!running) {
      startTimer(seconds);
      setRunning(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mins = parseInt(e.target.elements.minutes.value);
    startTimer(mins * 60);
    e.target.reset();
  };

  return (
    <div
      className="timer"
      style={{
        backgroundColor: "var(--dark-blue)",
        padding: "50px",
        margin: "50px",
        border: "solid 20px var(--teal)",
        borderRadius: "50px",
      }}
    >
      <h2>{label}</h2>
      <div className="display">
        <h1 className="display__time-left">{timeLeft || ""}</h1>
        <p className="display__end-time">{endTime || "Select a Timer"}</p>
      </div>
      <div className="timer-controls">
        <PomodoroButton onClick={() => handleTimerButtonClick(1500)} />

        <button
          data-time="300"
          className="timer-button"
          onClick={() => handleTimerButtonClick(300)}
        >
          5 Minute Eye Break
        </button>
        <button
          data-time="1200"
          className="timer-button"
          onClick={() => handleTimerButtonClick(1200)}
        >
          20 Minute Break
        </button>
        <button
          data-time="3600"
          className="timer-button"
          onClick={() => handleTimerButtonClick(3600)}
        >
          1 Hour Lunch Break
        </button>
        <form name="customForm" onSubmit={handleSubmit}>
          <input
            style={{
              backgroundColor: "var(--dark-blue)",
              color: "var(--teal)",
              border: "solid 5px var(--teal)",
              borderRadius: "50px",
              padding: "20px",
            }}
            type="text"
            name="minutes"
            placeholder="Enter Minutes"
          />
        </form>

        <button className="timer-button" onClick={pauseTimer}>
          Stop
        </button>

        <button className="timer-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
