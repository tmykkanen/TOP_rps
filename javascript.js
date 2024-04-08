/* eslint-disable no-console */
/* eslint-disable no-alert */
// initialize variables needed later
let playerScore = 0;
let computerScore = 0;
let scoreMessage = '';
let roundWinner = '';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage = `${capitalizeFirstLetter(
      winner
    )} wins! ${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === 'computer') {
    scoreMessage = `${capitalizeFirstLetter(
      winner
    )} wins! ${capitalizeFirstLetter(
      computerSelection
    )} beats ${playerSelection.toLowerCase()}`;
    return;
  }
  scoreMessage = `No winner! ${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`;
}

function playRound(playerSelection, computerSelection) {
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
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

// eslint-disable-next-line consistent-return
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
      // do nothing
  }
}

function playGame() {
  for (let round = 1; round <= 5; round += 1) {
    const playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
    playRound(playerSelection, getComputerSelection());
    console.log(scoreMessage);
  }
  if (playerScore === computerScore) {
    console.log(`Final result is a tie! ${playerScore}–${computerScore}`);
  } else if (playerScore > computerScore) {
    console.log(`Player wins the game! ${playerScore}–${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Computer wins the game! ${playerScore}–${computerScore}`);
  }
}
