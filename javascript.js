let playerScore = 0
let computerScore = 0
let scoreMessage = ''
let roundWinner = ''

function getComputerChoice() {
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function getPlayerChoise() {
    return prompt("Rock, Paper, or Scissors?").toUpperCase()
}

function announceWinner () {
    console.log(scoreMessage)
}

// DECLARE FUNTION playGame
function playGame() {
    for (let i = 0; i < 5; i++) {
        // CALL playRound with CHOICE INPUT from player
        playRound(getPlayerChoise(), getComputerChoice())
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
    // CALL playRound with CHOICE INPUT from player and CALLING computerSelection


// Write a NEW function called playGame().
// Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them.
// If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.