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

checkPassTurn = function (takenThisTurn) {
    if (takenThisTurn === 3) {
        return true;
    } else {
        return false;
    }
}

// -*- switchPlayer Switches Player if checkPassTurn returns True

switchPlayer = function (currentPlayer) {
    var check = checkPassTurn(countersTakenThisTurn);
    if (check === true) {
        if (currentPlayer === 1) {
            return 2;
        } else {return 1}
    } 
}

// -*- monitorGameEnd


// ----------------- Handling a Win  ----------------- 

// -*- checkForWin

checkForWin = function (totalCounts) {

}

