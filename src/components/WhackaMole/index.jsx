import React, { useState, useEffect } from "react";
import "../../assets/styles/components.css";

function WhackAMole() {
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [moles, setMoles] = useState([]);

  const holes = Array.from({ length: 6 }, (_, i) => i + 1);
  const [lastHole, setLastHole] = useState(null);

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    setLastHole(hole);
    return hole;
  }

  function peep() {
    if (timeUp || gameOver) return;
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    document.querySelector(`.hole${hole}`).classList.add("up");
    const mole = setTimeout(() => {
      document.querySelector(`.hole${hole}`).classList.remove("up");
      if (!timeUp && !gameOver) peep();
    }, time);
    setMoles((prevMoles) => [...prevMoles, mole]);
  }

  //   function startGame() {
  //     setScore(0);
  //     setTimeUp(false);
  //     setGameOver(false);
  //     setGameStarted(true);
  //     setMoles([]);
  //     peep();
  //     setTimeout(() => {
  //       setTimeUp(true);
  //       setGameOver(true);
  //     }, 10000);
  //   }
  function startGame() {
    setScore(0);
    setTimeUp(false);
    setGameOver(false);
    setGameStarted(true);
    setMoles([]);

    // Clear all timeouts
    moles.forEach((mole) => clearTimeout(mole));

    // Reset mole elements
    const allMoles = document.querySelectorAll(".mole");
    allMoles.forEach((mole) => mole.classList.remove("up"));

    peep();
    setTimeout(() => {
      setTimeUp(true);
      setGameOver(true);
    }, 10000);
  }

  useEffect(() => {
    if (gameStarted) {
      const moles = document.querySelectorAll(".mole");

      const bonk = (e) => {
        // Your bonk function logic here
        if (!e.isTrusted) return;
        if (!timeUp && !gameOver) {
          // Check if mole has already been hit
          if (!e.target.classList.contains("hit")) {
            setScore(score + 1); // Increase score by 1
            e.target.classList.add("hit"); // Mark mole as hit to prevent score doubling
          }
          e.target.classList.remove("up");
        }
      };

      const addEventListeners = () => {
        moles.forEach((mole) => {
          mole.addEventListener("click", bonk);
          mole.addEventListener("touchstart", bonk);
        });
      };

      const removeEventListeners = () => {
        moles.forEach((mole) => {
          mole.removeEventListener("click", bonk);
          mole.removeEventListener("touchstart", bonk);
        });
      };

      addEventListeners();

      return () => {
        removeEventListeners();
      };
    }
  }, [gameStarted, score, timeUp, gameOver]);

  useEffect(() => {
    return () => {
      moles.forEach((mole) => clearTimeout(mole));
    };
  }, [moles]);

  return (
    <div>
      <h1>
        Whack-a-mole! <span className="score">{score}</span>
      </h1>
      {!gameStarted && (
        <button className="start-button" onClick={startGame}>
          Start!
        </button>
      )}

      <div className="game">
        {holes.map((hole) => (
          <div key={hole} className={`hole hole${hole}`}>
            <div className="mole"></div>
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="game-over-popup">
          <h2>Game Over!</h2>
          <p>Your final score is: {score}</p>
          <button
            onClick={() => {
              setGameStarted(false);
              setGameOver(false);
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default WhackAMole;
