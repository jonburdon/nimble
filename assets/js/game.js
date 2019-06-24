// Declare variables
let whoseTurnItIs = 1;
let countersTakenThisTurn = 0;
let totalCounters = 21;
let idealMoves = [1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1,2,3,1,1];


// ----------------- Functions to access DOM  ----------------- 

// reportScore Function to take a variable and place it on the DOM

function reportScore(target, score) {
    document.getElementById(target).innerHTML = score;
}

// ----------------- Functions to initialise the game  ----------------- 

function restartScores() {
    whoseTurnItIs = 1;
    countersTakenThisTurn = 0;
    totalCounters = 21;
}

function displayStartScores() {
    reportScore("totalCounters",totalCounters),
    reportScore("whoseTurn",whoseTurnItIs),
    reportScore("gameStatus","Playing..."),
    reportScore("takenThisTurn",countersTakenThisTurn);
};

// -*- RUNS START OF GAME FUNCTIONS

function startGame() {
    restartScores();
    displayStartScores();
}

// ----------------- Functions to run when a Counter is clicked  ----------------- 

// -*- increaseCountersTaken Function to increase number of counters taken in this turn    

function increaseCountersTaken (counts) {
    counts++;
    return counts;
}


// -*- decreaseOverallCounters Function to decrease number of overall counters

function decreaseOverallCounters (counts) {
    counts--;
    return counts;
};


// -*- checkPassTurn Check if play should be passed to other player because they took 3

function checkPassTurn(takenThisTurn) {
    if (takenThisTurn === 3) {
        countersTakenThisTurn = 0
        return true;
    } else {
        return false;
    }
}

// -*- checkSwitchPlayer Switches Player if checkPassTurn returns True

function checkSwitchPlayer (currentPlayer) {
    let check = checkPassTurn(countersTakenThisTurn);
    if (check) {
        return currentPlayer = (currentPlayer === 1)? 2:1;
    } else {
    return currentPlayer
    }
}

// -*- Do the action of switching player automatically

function switchPlayer() {
    whoseTurnItIs = checkSwitchPlayer(whoseTurnItIs);
    // reportScore("whoseTurn", checkSwitchPlayer(whoseTurnItIs));
}


// -*- endTheGameOrContinue

function endTheGameOrContinue () {
    let endOrNot = checkForWin(totalCounters);
    if (endOrNot) {
        respondToWin();
    }
}

// -*- counterClicked - EXECUTE COUNTER CLICK FUNCTIONS - Above
// List to execute: hideCounterClicked

function counterIsClicked() {
reportScore("whoseTurn", whoseTurnItIs);
countersTakenThisTurn = increaseCountersTaken(countersTakenThisTurn);
// reportScore("takenThisTurn",countersTakenThisTurn);
totalCounters = decreaseOverallCounters(totalCounters);
reportScore("totalCounters",totalCounters);
switchPlayer();
reportScore("whoseTurn", whoseTurnItIs);
reportScore("takenThisTurn",countersTakenThisTurn);
activateWinSequenceTest();
    // endTheGameOrContinue(),
    // switchPlayer();
}

// ----------------- Handling a Win  ----------------- 

// -*- checkForWin

function checkForWin (totalCounts) {
    if (totalCounts === 0) {
        return true;
    } else {
        return false;
    }
}

function respondToWin () {
    reportScore("gameStatus", "Game Over, Player " + whoseTurnItIs + " has Won!");
    
    // Also need to clear screen etc, and update High Score tables etc
}

function activateWinSequenceTest () {
    if (checkForWin(totalCounters)) {
        respondToWin();
    }
}


// ----------------- Functions to run when a the Pass Button has been clicked  ----------------- 

// -*- checkPassAllowed Check if passing play to other player is allowed, and if so, swap whose turn it is

function checkPassAllowed (passcheck) {
    console.log('checkPassAllowed initiated');
    console.log('whoseTurnItIs:' + whoseTurnItIs)
    if (passcheck > 0) {
        console.log('passcheck(whoseTurnitis) is found to be >0');
        if (whoseTurnItIs === 1) {
            console.log('whoseTurnItIs is found to be 1, so return 2');
            return 2;
        } else {
            console.log('whoseTurnItIs is not found to be 1, so return 1');
            return 1;
        }
    } 
    else {
        console.log('not found to be great than zero');
        return whoseTurnItIs}
}

// -*- passTurnToOtherPlayerManually - EXECUTE OTHER FUNCTIONS to update DOM by changing the player ONLY if allowed.

function passTurnToOtherPlayerManually () { // Call this function when 'PASS' Button is clicked
whoseTurnItIs = checkPassAllowed(countersTakenThisTurn);
countersTakenThisTurn = 0;
reportScore("whoseTurn",whoseTurnItIs);
reportScore("takenThisTurn", countersTakenThisTurn);
}

// ----------------- Functions for Human Vs Computer  ----------------- 

//-*- Impossible Mode - Computer makes ideal move every time

function takeTheIdealMove() {
    return idealMoves[totalCounters-1];
}

//-*- Random Move logic

// Pick a random number from 1 to 3 unless there are 2 counters left.
function randomMoveWithThree() {
    let guess3 = (Math.random()*3);
    if (guess3 < 1) {
        return 1;
    } else if (guess3 < 2) {
        return 2;
    } else {return 3}
}

// -*- Decide randomly between taking 1 or 2 counters

function randomMoveWithTwo() {
    console.log('Using randomMoveWithTwo ...')
    let guess2 = (Math.random()*2);
    console.log(guess2)
    if (guess2 <1) {
        console.log('I will return 1');
        return 1
    } else {
        console.log('I will return 2');
        return 2}
}

// -*- Make a random moved based on how many counters are left - 1, 2 or 3

function makeRandomMove(counters) {
    if (counters === 1) {
        return 1;
    } else if (counters === 2) {
        return randomMoveWithTwo();
    } else {
        return randomMoveWithThree();
    }
}

//-*- Levelled Move - receive difficulty level and return the number of counters to take *** NOT WORKING ***

function levelledMove(difficulty) {
let myGo = (Maths.random()*(difficulty+3)); //Pass this function 50 for impossible 8 for hard, 3 for Medium Mode, 1 for Easy Mode
if (myGo > difficulty) {
    return makeRandomMove(totalCounters); 
} else {
    return takeTheIdealMove(); 
}
}




// -*- Take an impossible to beat move

function perfectMove() {
    let myDecision = takeTheIdealMove();
    totalCounters = totalCounters - myDecision;
    reportScore("gameStatus","Computer Decided to take "+ myDecision + " counters.");
    reportScore("totalCounters", totalCounters);
    
    // Pass play to player 1 UNLESS Computer has won.
    if (totalCounters === 0) {
        respondToWin();
    } else {
        whoseTurnItIs = 1;
        reportScore("whoseTurn", whoseTurnItIs);
    }
}

// -*- Do the action of taking a Computers Turn

function computersTurn() { // When working, must receive 50, 8, 3 or 1 for Impossible, hard, medium and easy

        // let decision = levelledMove(diffLevel);
    
    let decision = makeRandomMove(totalCounters);
    
    totalCounters = totalCounters - decision;
    reportScore("gameStatus","Computer Decided to take "+ decision + " counters.");
    reportScore("totalCounters", totalCounters);
    
    // Pass play to player 1 UNLESS Computer has won.
    if (totalCounters === 0) {
        respondToWin();
    } else {
        whoseTurnItIs = 1;
        reportScore("whoseTurn", whoseTurnItIs);
    }

    // Needs refactoring to choose which function to run based on Random, Easy, Medium, Hard or Impossible Mode.
}