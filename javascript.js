// initialize variables needed later
let playerScore = 0
let computerScore = 0
let scoreMessage = ''
let roundWinner = ''
let playerSelection = ''

function playGame() {
    for (let round = 1; round <= 5; round++) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toUpperCase()
        playRound(playerSelection, getComputerSelection())
        console.log(scoreMessage)
      }

    if (playerScore === computerScore) {
        console.log (`Final result is a tie! ${playerScore}–${computerScore}`)
    } else if (playerScore > computerScore) {
        console.log (`Player wins the game! ${playerScore}–${computerScore}`)
    } else if (playerScore < computerScore) {
        console.log (`Computer wins the game! ${playerScore}–${computerScore}`)
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    } 
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage = `${capitalizeFirstLetter(
            winner
        )} wins! ${capitalizeFirstLetter(
            playerSelection
        )} beats ${computerSelection.toLowerCase()}`
        return 
    }
    if (winner === 'computer') {
        scoreMessage = `${capitalizeFirstLetter(
            winner
        )} wins! ${capitalizeFirstLetter(
            computerSelection
        )} beats ${playerSelection.toLowerCase()}`
        return
    }
    scoreMessage = `No winner! ${capitalizeFirstLetter(
        playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
}

function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    switch (randomNumber) {
        case 1:
            return 'ROCK'
        case 2:
            return 'PAPER'
        case 3:
            return 'SCISSORS'
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}