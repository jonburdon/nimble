// Declare variables
let whoseTurnItIs = 1;
let countersTakenThisTurn = 3;
let totalCounters = 21;

//NEED TO CREATE A VARIABLE TO SET UP THE GAME AND SET VARIABLES UP

// ----------------- Functions to access DOM  ----------------- 

// reportScore Function to take a variable and place it on the DOM

reportScore = function (target, score) {
    document.getElementById(target).innerHTML = score;
}

// ----------------- Functions to run when a Counter is clicked  ----------------- 

// -*- increaseCountersTaken Function to increase number of counters taken in this turn    

increaseCountersTaken = function (counts) {
    counts++;
    return counts;
};

// -*- decreaseOverallCounters Function to decrease number of overall counters

decreaseOverallCounters = function (counts) {
    counts--;
    return counts;
};


// -*- checkPassTurn Check if play should be passed to other player because they took 3

checkPassTurn = function (takenThisTurn) {
    if (takenThisTurn === 3) {
        return true;
    } else {
        return false;
    }
}

// -*- checkSwitchPlayer Switches Player if checkPassTurn returns True

checkSwitchPlayer = function (currentPlayer) {
    var check = checkPassTurn(countersTakenThisTurn);
    if (check === true) {
        if (currentPlayer === 1) {
            return 2;
        } else {
            return 1
        }
    }
}

// -*- Do the action of switching player automatically

switchPlayer = function () {
    reportScore("whoseTurn", checkSwitchPlayer(whoseTurnItIs));
}


// -*- endTheGameOrContinue

endTheGameOrContinue = function () {
    var endOrNot = checkForWin(totalCounters);
    if (endOrNot === true) {
        respondToWin();
    }
}

// -*- counterClicked - EXECUTE COUNTER CLICK FUNCTIONS - Above
// List to execute: hideCounterClicked

counterIsClicked = function () {
    increaseCountersTaken(countersTakenThisTurn),
    decreaseOverallCounters(totalCounters),
    endTheGameOrContinue(),
    switchPlayer();
}

// ----------------- Handling a Win  ----------------- 

// -*- checkForWin

checkForWin = function (totalCounts) {
    if (totalCounts === 0) {
        return true;
    } else {
        return false;
    }
}

respondToWin = function () {
    reportScore("gameStatus", "Game Over")
    // Also need to say who has won
    // Also need to clear screen etc, and update High Score tables etc
}

// ----------------- Functions to run when a the Pass Button has been clicked  ----------------- 

// -*- checkPassAllowed Check if passing play to other player is allowed, and if so, swap whose turn it is

checkPassAllowed = function (passcheck) {
    if (passcheck > 1) {
        if (currentPlayer === 1) {
            return 2;
        } else {
            return 1
        }
    }
}

// -*- passTurnToOtherPlayerManually - EXECUTE OTHER FUNCTIONS to update DOM by changing the player ONLY if allowed.

passTurnToOtherPlayerManually = function () { // Call this function when 'PASS' Button is clicked
reportScore("whoseTurn",checkPassAllowed(countersTakenThisTurn));
}