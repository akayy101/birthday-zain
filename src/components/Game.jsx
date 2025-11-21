import React, { useState } from 'react';
import '../assets/css/Game.css';

const questions = [
  {
    question: "Which city did we go for our impromptu trip?",
    options: ["Sargodha", "Lahore", "Karachi", "Berlin"],
    answer: "Sargodha"
  },
  {
    question: "What happened during our football game in the rain?",
    options: ["You scored a goal", "You slipped into mud", "We won", "Ball burst"],
    answer: "You slipped into mud"
  },
  {
    question: "Which class did you make a 'unique' vase?",
    options: ["Pottery", "Painting", "Sketching", "Gym"],
    answer: "Pottery"
  }
];

const Game = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
        if (score + (option === questions[currentQ].answer ? 1 : 0) === questions.length) {
          setShowConfetti(true);
        }
      }
    }, 1000);
  };

  const handleReplay = () => {
    setCurrentQ(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
    setShowConfetti(false);
  };

  return (
    <section id="game-section">
      <h2>Guess The Memory</h2>
      {!showResult ? (
        <div className="question-card">
          <p className="question">{questions[currentQ].question}</p>
          <div className="options">
            {questions[currentQ].options.map((option, idx) => (
              <button
                key={idx}
                className={`option-btn ${selectedOption ? (option === questions[currentQ].answer ? 'correct' : (option === selectedOption ? 'wrong' : '')) : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result-card">
          <h3>Your Score: {score}/{questions.length}</h3>
          <p>{score === questions.length ? "You know Zain so well! 🎉" : "Good job! Memories are tricky 😄"}</p>
          <button className="replay-btn" onClick={handleReplay}>Replay</button>
          {showConfetti && (
            <div className="confetti">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Game;
