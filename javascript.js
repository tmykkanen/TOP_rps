/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-alert */
// initialize variables needed later
let playerScore = 0;
let computerScore = 0;
const container = document.getElementById('container');
const results = document.getElementById('results');

// Helper function for formatting results message
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function displayRoundResults(message) {
  console.log(message);
  results.textContent = message;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  let scoreMessage;

  if (winner === 'tie') {
    scoreMessage = `No winner! ${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}.`;
  }
  if (winner === 'player') {
    scoreMessage = `${capitalizeFirstLetter(
      winner
    )} wins! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}.`;
  }
  if (winner === 'computer') {
    scoreMessage = `${capitalizeFirstLetter(
      winner
    )} wins! ${capitalizeFirstLetter(
      computerSelection
    )} beats ${playerSelection.toLowerCase()}.`;
  }

  if (playerScore < 5 && computerScore < 5) {
    scoreMessage += ` Score is now ${playerScore}–${computerScore}.`;
    return scoreMessage;
  }

  if (playerScore === computerScore) {
    scoreMessage += ` Final result is a tie! ${playerScore}–${computerScore}`;
  } else if (playerScore > computerScore) {
    scoreMessage += ` Player wins the game! ${playerScore}–${computerScore}`;
  } else if (playerScore < computerScore) {
    scoreMessage += ` Computer wins the game! ${playerScore}–${computerScore}`;
  }
  return scoreMessage;
}

function playRound(playerSelection, computerSelection) {
  let roundWinner;

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS')
    || (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    playerScore += 1;
    roundWinner = 'player';
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'PAPER')
    || (playerSelection === 'PAPER' && computerSelection === 'SCISSORS')
    || (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')
  ) {
    computerScore += 1;
    roundWinner = 'computer';
  }

  const message = updateScoreMessage(roundWinner, playerSelection, computerSelection);
  displayRoundResults(message);
}

function getComputerSelection() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomNumber) {
    case 1:
      return 'ROCK';
    case 2:
      return 'PAPER';
    case 3:
      return 'SCISSORS';
    default:
      return 'ERR';
  }
}

container.addEventListener('click', (e) => {
  const playerSelection = e.target.id;

  if (playerSelection !== 'container') {
    playRound(playerSelection, getComputerSelection());
  }
});
