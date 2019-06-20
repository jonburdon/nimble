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

// Pass play to other player after three counters taken


// -*- passTurn Pass turn to other player after three counters taken