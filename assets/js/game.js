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


// -*- checkPassTurn Pass turn to other player after three counters taken
var whoseTurn = 1;
var countersTakenThisTurn = 3;
var totalCounters = 21;

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
        } else {return 1}
    } 
}

// -*- Do the action of switching player

// NEXT STEP: Write this function!

// -*- endTheGameOrContinue

endTheGameOrContinue = function () {
    var endOrNot = checkForWin(totalCounters);
    if (endOrNot === true) {
        respondToWin();
    }
}

// -*- counterClicked - EXECUTE COUNTER CLICK FUNCTIONS - Above
// List to execute: endTheGameOrContinue

// ----------------- Handling a Win  ----------------- 

// -*- checkForWin

checkForWin = function (totalCounts) {
if (totalCounts === 0) {
    return true;
} else {return false;}
}

respondToWin = function () {
    reportScore ("gameStatus","Game Over")
        // Also need to say who has won
        // Also need to clear screen etc, and update High Score tables etc
}

