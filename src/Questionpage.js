import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function QuestionPage({ name }) {
  const [noClicks, setNoClicks] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);

  const noButtonMessages = [
    "No",
    "Are you sure? 🥺",
    "Really? 💔"
  ];

  const handleNoClick = () => {
    setNoClicks(prev => prev + 1);
  };

  const handleNoMouseEnter = (e) => {
    if (noClicks < 3) {
      const button = e.target;
      const container = button.parentElement;
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const maxX = containerRect.width - buttonRect.width - 40;
      const maxY = containerRect.height - buttonRect.height - 40;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      setNoButtonPosition({ x: randomX, y: randomY });
    }
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setShowConfetti(true);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  if (yesClicked) {
    return (
      <div className="question-page success-page">
        {showConfetti && <Confetti />}
        <div className="success-container">
          <h1 className="success-title">🎉 Yay! 🎉</h1>
          <p className="success-message">
            I knew you'd say yes, {name}! ❤️
          </p>
          <p className="success-subtitle">
            This Valentine's Day just got a whole lot better! 💕
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="question-page">
      <div className="question-container">
        <h1 className="question-title">
          {name}, will you be my Valentine? 💖
        </h1>
        
        <div className="buttons-container">
          <button 
            className="yes-button"
            onClick={handleYesClick}
            style={{
              fontSize: `${1.2 + (noClicks * 0.3)}rem`,
              padding: `${15 + (noClicks * 5)}px ${30 + (noClicks * 10)}px`
            }}
          >
            Yes! 💕
          </button>

          {noClicks < 3 && (
            <button
              className="no-button"
              onClick={handleNoClick}
              onMouseEnter={handleNoMouseEnter}
              style={{
                position: 'absolute',
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: 'all 0.3s ease'
              }}
            >
              {noButtonMessages[noClicks]}
            </button>
          )}
        </div>

        {noClicks >= 3 && (
          <p className="hint-text">
            The "No" button ran away... I guess that means yes? 😊
          </p>
        )}
      </div>
    </div>
  );
}

export default QuestionPage;