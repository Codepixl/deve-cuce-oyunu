import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [currentAnimal, setCurrentAnimal] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const animals = useMemo(() => ['Deve', 'Cüce'], []);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        setCurrentAnimal(animals[randomIndex]);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, animals]);

  const handleButtonClick = (clickedAnimal) => {
    if (clickedAnimal === currentAnimal) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const startGame = () => {
    setIsPlaying(true);
  };

  const stopGame = () => {
    setIsPlaying(false);
    setCurrentAnimal('');
    setScore(0);
  };

  return (
    <div className="App">
      <h1>Deve Cüce Oyunu</h1>
      <h2>Puan: {score}</h2>
      {isPlaying ? (
        <>
          <p>{currentAnimal}</p>
          <button onClick={() => handleButtonClick('Deve')}>Deve</button>
          <button onClick={() => handleButtonClick('Cüce')}>Cüce</button>
          <button onClick={stopGame}>Oyunu Durdur</button>
        </>
      ) : (
        <button onClick={startGame}>Oyuna Başla</button>
      )}
    </div>
  );
}

export default App;
