let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


// Write your code below:
const generateTarget =  () => {
   Math.floor(Math.random() * 10)
}



const compareGuesses = (humanNumber, computerNumber, target)=> {
  let humanGuess = Math.abs(target - humanNumber);
  let computerGuess = Math.abs(target - computerNumber);
  if(humanNumber > 9 || humanNumber < 0){
    alert('Please enter the number between 0 and 9');
  }
  if(humanGuess <= computerGuess){
    return true;
  }
  else {
    return false;
  }
  const updateScore = (winner) => {
    if(winner === 'Human'){
      humanScore++;
    }
    else if ( winner === 'computer') {
      computerScore++;

    }
  }

const advanceRound = () => {
  currentRoundNumber++;
}
}
