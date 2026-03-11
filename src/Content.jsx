import React, { useState } from "react";
import paper from "./Images/paper.png";
import rock from "./Images/rock.png";
import scissor from "./Images/scissors.png";
import "./content.css";
import Score from "./Score";

const Content = () => {
  const [userClick, setUserClick] = useState(null);
  const [computerClick, setcomputerClick] = useState(null);
  const [Finalresult, setFinalResult] = useState(null);
  const [step, setStep] = useState(1);

  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  //CHOICES
  const choices = [
    { name: "Rock", emoji: rock },
    { name: "Paper", emoji: paper },
    { name: "Scissors", emoji: scissor },
  ];

  const handelClick = (choice) => {
    setUserClick(choice);
    const ComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    setcomputerClick(ComputerChoice);

    setStep(2);
    setTimeout(() => {
      const winner = result(choice, ComputerChoice.name);
      setFinalResult(winner);

      if (winner === "User") {
        setUserScore((pre) => pre + 1);
      } else if (winner === "Computer") {
        // Only increase if computer wins
        setComputerScore((pre) => pre + 1);
      }
      setStep(3);
    }, 1000);
  };

  const resetGame = () => {
    setStep(1);
    setUserClick(null);
    setcomputerClick(null);
    setFinalResult(null);
  };

  const result = (userMove, ComputerMove) => {
    if (userMove === ComputerMove) {
      return "Draw";
    } else if (
      (userMove === "Rock" && ComputerMove === "Scissors") ||
      (userMove === "Paper" && ComputerMove === "Rock") ||
      (userMove === "Scissors" && ComputerMove === "Paper")
    ) {
      return "User";
    } else {
      return "Computer";
    }
  };

  return (
    <div className="content">
      {step === 1 && (
        <>
          <div className="circle">
            {choices.map((choice) => (
              <img
                key={choice.name}
                className={`img ${choice.name.toLowerCase()}`}
                src={choice.emoji}
                alt={choice.name}
                onClick={() => handelClick(choice.name)}
              />
            ))}
          </div>

          <div className="lines-container">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
          <p className="instruction"> Make Your Move</p>
        </>
      )}

      {step === 2 && <p className="loading-text">Computer is choosing...</p>}

      {step === 3 && (
        <div className="result-container">
          <div className="choices">
            {/* User's Choice */}
            <div
              className={`choice-box ${
                Finalresult === "You Win" ? "winner" : ""
              }`}
            >
              <p className="choice-text">You Picked</p>
              <div className="choice-circle">
                <img
                  src={
                    choices.find((choice) => choice.name === userClick)?.emoji
                  }
                  alt={userClick}
                  className="result-img"
                />
              </div>
            </div>

            {/* Final Result */}
            <div className="result-message">
              <p className="final-result">
                {Finalresult === "User"
                  ? "🎉 You Win!"
                  : Finalresult === "Computer"
                  ? "Computer Wins!"
                  : "😐It's a Draw!"}
              </p>

              <button className="play-again-btn" onClick={resetGame}>
                Try Again
              </button>
            </div>

            {/* Computer's Choice */}
            <div
              className={`choice-box ${
                Finalresult === "Computer Wins" ? "winner" : ""
              }`}
            >
              <p className="choice-text">Computer Picked</p>
              <div className="choice-circle">
                <img
                  src={computerClick?.emoji}
                  alt={computerClick?.name}
                  className="result-img"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Score userScore={userScore} computerScore={computerScore} />
    </div>
  );
};
export default Content;
