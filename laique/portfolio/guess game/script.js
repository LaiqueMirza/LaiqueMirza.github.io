let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = (targetNumber) => {
    return Math.floor(Math.random() * 10)
} 

let compareGuesses = (humanGuess, computerGuess, secretTarget) => {
 let compNo = Math.abs(computerGuess - secretTarget) ;
 let userNo = Math.abs(humanGuess - secretTarget) ;
 
 if (compNo > userNo){
  return true
 }
 else if (userNo > compNo){
     return false
 }
 else if (compNo === userNo){
    return true
 }
}

let updateScore = (addScore) => {
    if(compareGuesses === true){
        return humanScore += 1
    }
    else if(addScore === 'human'){
        return humanScore += 1
    }
    else if(addScore === 'computer'){
        return computerScore += 1
    }
    else if (compareGuesses === false) {
        return computerScore += 1
    }
}

let advanceRound = () =>{
    return currentRoundNumber += 1
}



