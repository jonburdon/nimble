// Declare variables
let whoseTurnItIs = 1;
let countersTakenThisTurn = 0;
let totalCounters = 21;



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
        
        return true;
    } else {
        return false;
    }
}

// -*- checkSwitchPlayer Switches Player if checkPassTurn returns True

function checkSwitchPlayer (currentPlayer) {
    var check = checkPassTurn(countersTakenThisTurn);
    if (check) {
        countersTakenThisTurn = 0;      //Reset counters taken

        if (currentPlayer === 1) {      // Change player
  
            return 2;
        } else {

            return 1;
        }
    } else {                            // Keep player the same
        if (currentPlayer === 1) {
            return 1;
        } else {
            return 2;
        }

    }
}

// -*- Do the action of switching player automatically

function switchPlayer() {
   
    reportScore("whoseTurn", checkSwitchPlayer(whoseTurnItIs));
}


// -*- endTheGameOrContinue

function endTheGameOrContinue () {
    var endOrNot = checkForWin(totalCounters);
    if (endOrNot) {
        respondToWin();
    }
}

// -*- counterClicked - EXECUTE COUNTER CLICK FUNCTIONS - Above
// List to execute: hideCounterClicked

function counterIsClicked() {

countersTakenThisTurn = increaseCountersTaken(countersTakenThisTurn),
reportScore("takenThisTurn",countersTakenThisTurn),
totalCounters=decreaseOverallCounters(totalCounters),
reportScore("totalCounters",totalCounters),
switchPlayer(),
reportScore("takenThisTurn",countersTakenThisTurn);

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
    reportScore("gameStatus", "Game Over")
    // Also need to say who has won
    // Also need to clear screen etc, and update High Score tables etc
}

// ----------------- Functions to run when a the Pass Button has been clicked  ----------------- 

// -*- checkPassAllowed Check if passing play to other player is allowed, and if so, swap whose turn it is

function checkPassAllowed (passcheck) {
    if (passcheck > 1) {
        if (currentPlayer === 1) {
            return 2;
        } else {
            return 1
        }
    }
}

// -*- passTurnToOtherPlayerManually - EXECUTE OTHER FUNCTIONS to update DOM by changing the player ONLY if allowed.

function passTurnToOtherPlayerManually () { // Call this function when 'PASS' Button is clicked
reportScore("whoseTurn",checkPassAllowed(countersTakenThisTurn));
}