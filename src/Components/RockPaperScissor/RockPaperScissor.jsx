import React, { useState } from 'react';
import './RockPaperScissor.css'
// import rockImage from '../../assets/images/rock.png'
// import paperImage from '../../assets/images/paper.png'
// import scissorImage from '../../assets/images/sc.png'

function RockPaperScissor() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    generateComputerChoice();
    determineWinner(choice, computerChoice);
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[randomIndex]);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult('It\'s a tie!');
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <img
            key={choice}
            src={`../../assets/images/${choice}.png`}
            alt={choice}
            onClick={() => handleUserChoice(choice)}
          />
        ))}
      </div>
      {userChoice && computerChoice && result && (
        <div className="result">
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
          <h2>{result}</h2>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissor;
