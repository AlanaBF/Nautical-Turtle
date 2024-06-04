import React from 'react';
import pomodoroTimer from "./Pomodoro technique.png";
const PomodoroButton = ({ onClick }) => {
  return (
    <button
      data-time="1500"
      className="timer-button"
      onClick={onClick}
    >
      <img src={pomodoroTimer} alt="Pomodoro" style={{width: "50px"}}/>
    </button>
  );
};

export default PomodoroButton;