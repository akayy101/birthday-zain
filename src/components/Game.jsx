import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/Game.css';

// TODO(ariba): swap in more of your own inside-joke questions any time —
// these three are already real memories, just restyled.
const questions = [
  {
    question: 'Which city did we go to for our impromptu trip?',
    options: ['Sargodha', 'Lahore', 'Karachi', 'Berlin'],
    answer: 'Sargodha',
  },
  {
    question: 'What happened during our football game in the rain?',
    options: ['You scored a goal', 'You slipped into the mud', 'We won', 'The ball burst'],
    answer: 'You slipped into the mud',
  },
  {
    question: 'What did that pottery class end up producing?',
    options: ['A perfect bowl', 'A ‘unique’ vase', 'Nothing at all', 'A mug'],
    answer: 'A ‘unique’ vase',
  },
];

const GoldConfetti = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let alive = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#c9932e', '#a8762a', '#8c7a45', '#f0dfb8'];
    const ribbons = Array.from({ length: 46 }, () => ({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height * 0.4,
      w: 4 + Math.random() * 3,
      h: 12 + Math.random() * 10,
      speed: 1.1 + Math.random() * 1.6,
      drift: (Math.random() - 0.5) * 0.6,
      angle: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.05,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const start = performance.now();

    const tick = (now) => {
      if (!alive) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const elapsed = now - start;
      const fade = elapsed > 5200 ? Math.max(0, 1 - (elapsed - 5200) / 900) : 1;

      ribbons.forEach((r) => {
        r.y += r.speed;
        r.x += r.drift;
        r.angle += r.spin;
        if (r.y > canvas.height + 20) {
          r.y = -20;
          r.x = Math.random() * canvas.width;
        }
        ctx.save();
        ctx.globalAlpha = fade;
        ctx.translate(r.x, r.y);
        ctx.rotate(r.angle);
        ctx.fillStyle = r.color;
        ctx.fillRect(-r.w / 2, -r.h / 2, r.w, r.h);
        ctx.restore();
      });

      if (fade > 0) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="gold-confetti-canvas" aria-hidden="true" />;
};

const Game = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOptionClick = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    const correct = option === questions[currentQ].answer;
    const nextScore = score + (correct ? 1 : 0);
    if (correct) setScore(nextScore);

    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
        if (nextScore === questions.length) setShowConfetti(true);
      }
    }, 900);
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
      {showConfetti && <GoldConfetti />}
      <div className="container game-head">
        <span className="eyebrow">Chapter Seven</span>
        <h2 className="chapter-heading">Guess the <em>Memory</em></h2>
        <p className="game-sub">Let's see how well you remember your own life.</p>
      </div>

      <div className="container">
        {!showResult ? (
          <div className="question-card">
            <p className="question-progress">{currentQ + 1} / {questions.length}</p>
            <p className="question">{questions[currentQ].question}</p>
            <div className="options">
              {questions[currentQ].options.map((option) => {
                const isAnswer = option === questions[currentQ].answer;
                const isChosen = option === selectedOption;
                let stateClass = '';
                if (selectedOption) {
                  if (isAnswer) stateClass = 'correct';
                  else if (isChosen) stateClass = 'wrong';
                }
                return (
                  <button
                    key={option}
                    className={`option-btn ${stateClass}`}
                    onClick={() => handleOptionClick(option)}
                    disabled={!!selectedOption}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="result-card">
            <span className="eyebrow">Final score</span>
            <h3>{score} / {questions.length}</h3>
            <p>
              {score === questions.length
                ? 'You know him better than he gives you credit for.'
                : "Close enough — some of these only he'd remember perfectly."}
            </p>
            <button className="btn-gold replay-btn" onClick={handleReplay}>Play again</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Game;
