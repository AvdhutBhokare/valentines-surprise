import React, { useState } from 'react';

function NamePage({ onSubmit }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      onSubmit(inputName.trim());
    }
  };

  return (
    <div className="name-page">
      <div className="name-container">
        <h1 className="title">💝 Happy Valentine's Day!! ♾️💝</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Enter your name..."
            className="name-input"
            autoFocus
          />
          <button type="submit" className="submit-button">
            Continue →
          </button>
        </form>
      </div>
    </div>
  );
}

export default NamePage;