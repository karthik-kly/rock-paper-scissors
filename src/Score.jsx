import React from "react";
import "./score.css";

const Score = ({ userScore, computerScore }) => {
  return (
    <footer className="score-footer">
      <div className="score-box">
        <p className="score-label"> Your Score </p>
        <p className="score-value">{userScore}</p>
      </div>
      <p className="vs"> V/S </p>
      <div className="score-box">
        <p className="score-label"> Computer Score </p>
        <p className="score-value">{ computerScore}</p>
      </div>
    </footer>
  );
};

export default Score;

{
  /* <footer className="score-footer">
      <div className="score-box">
        <p className="score-label">Your Score</p>
        <p className="score-value">{userScore}</p>
      </div>
      <p> V/S</p>
      <div className="score-box">
        <p className="score-label">Computer Score</p>
        <p className="score-value">{computerScore}</p>
      </div>
    </footer> */
}
