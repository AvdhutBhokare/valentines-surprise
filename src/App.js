import React, { useState } from 'react';
import './App.css';
import NamePage from './NamePage';
import QuestionPage from './Questionpage';

function App() {
  const [page, setPage] = useState('name');
  const [name, setName] = useState('');

  return (
    <div className="App">
      {page === 'name' ? (
        <NamePage 
          onSubmit={(enteredName) => {
            setName(enteredName);
            setPage('question');
          }} 
        />
      ) : (
        <QuestionPage name={name} />
      )}
    </div>
  );
}

export default App;