// Declare variables
let whoseTurnItIs = 1;
let countersTakenThisTurn = 0;
let totalCounters = 21;
let idealMoves = [1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1];
let mode = "hard";





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
    reportScore("totalCounters", totalCounters),
        reportScore("whoseTurn", whoseTurnItIs),
        reportScore("gameStatus", "Playing..."),
        reportScore("takenThisTurn", countersTakenThisTurn);
};

// -*- RUNS START OF GAME FUNCTIONS

function startGame() {
    showAllCounters();
    restartScores();
    displayStartScores();
}

// -*- Change difficulty mode

function changeMode(choice) {
    mode = choice;
    console.log(`${mode} selected by changeMode function`)
    reportScore("gameStatus", `Mode set to ${mode} mode.`)
}

// ----------------- Hiding and showing Counters on the screen  ----------------- 

//-*- Remove Nth counter
function hideNthCounter(counterNumber) {
    $(`.counter:nth-of-type(${counterNumber})`)
        .addClass("hidden");
}

//-*- Remove either one, two or three counters

//*** SOMEWHERE HERE IT STOPS JAVA RUNNING ***/

// function hideComputersCounters(numToTake) {
//     // let countersToTake = numToTake;
//     for (i = numToTake; i > 0; i --;) {
         
//         hideNthCounter(totalCounters-(i-1));
//     }
// }

function hideComputersCounters(num) {
    for (i = num; i > 0; i--) {
        hideNthCounter(totalCounters-(i-1));
      }

}

//-*- Show all counters

function showAllCounters() {
    $(".counter").removeClass("hidden");
}

// ----------------- Functions to run when a Counter is clicked  ----------------- 


// -*- increaseCountersTaken Function to increase number of counters taken in this turn    

function increaseCountersTaken(counts) {
    counts++;
    return counts;
}


// -*- decreaseOverallCounters Function to decrease number of overall counters

function decreaseOverallCounters(counts) {
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

function checkSwitchPlayer(currentPlayer) {
    let check = checkPassTurn(countersTakenThisTurn);
    if (check) {
        return currentPlayer = (currentPlayer === 1) ? 2 : 1;
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

function endTheGameOrContinue() {
    let endOrNot = checkForWin(totalCounters);
    if (endOrNot) {
        respondToWin();
    }
}

// -*- counterClicked - EXECUTE COUNTER CLICK FUNCTIONS - Above

function counterIsClicked() {
    reportScore("whoseTurn", whoseTurnItIs);
    countersTakenThisTurn = increaseCountersTaken(countersTakenThisTurn);
    // reportScore("takenThisTurn",countersTakenThisTurn);
    totalCounters = decreaseOverallCounters(totalCounters);
    reportScore("totalCounters", totalCounters);
    switchPlayer();
    reportScore("whoseTurn", whoseTurnItIs);
    reportScore("takenThisTurn", countersTakenThisTurn);
    activateWinSequenceTest();
    humanOrComputer();

}

// ----------------- Handling a Win  ----------------- 

// -*- checkForWin

function checkForWin(totalCounts) {
    if (totalCounts === 0) {
        return true;
    } else {
        return false;
    }
}

function respondToWin() {
    reportScore("gameStatus", "Game Over, Player " + whoseTurnItIs + " has Won!");

    // Also need to clear screen etc, and update High Score tables etc
}

function activateWinSequenceTest() {
    if (checkForWin(totalCounters)) {
        respondToWin();
    }
}


// ----------------- Functions to run when a the PASS PLAY Button has been clicked  ----------------- 

// -*- checkPassAllowed Check if passing play to other player is allowed, and if so, swap whose turn it is

function checkPassAllowed(passcheck) {
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
    } else {
        console.log('not found to be great than zero');
        return whoseTurnItIs
    }
}

// -*- passTurnToOtherPlayerManually - EXECUTE OTHER FUNCTIONS to update DOM by changing the player ONLY if allowed.

function passTurnToOtherPlayerManually() { // Call this function when 'PASS' Button is clicked
    whoseTurnItIs = checkPassAllowed(countersTakenThisTurn);
    countersTakenThisTurn = 0;
    reportScore("whoseTurn", whoseTurnItIs);
    reportScore("takenThisTurn", countersTakenThisTurn);
    humanOrComputer();
}

// ----------------- Functions for Human Vs Computer  ----------------- 

// -*- If Human v Human, do nothing, otherwise make a move based on difficulty mode and return play to P1

function humanOrComputer() {
    console.log(`It is player ${whoseTurnItIs} 's turn according to HorC function`)
    if (mode !== "human" && whoseTurnItIs === 2) { // IF HUMAN UPDATE STATUS

        if (mode === "impossible") {
            console.log('Impossible Mode activated in humanOrComputer')
            thinkThenMove(50);
        } else if (mode === "hard") {
            console.log('Hard Mode activated in humanOrComputer')
            thinkThenMove(8);
        } else if (mode === "medium") {
            console.log('Medium Mode activated in humanOrComputer')
            thinkThenMove(3);
        } else { // DEFAULT TO EASY MODE
            console.log('Easy Mode activated in humanOrComputer')
            thinkThenMove(1);
        }

    } else // IF NOT HUMAN, TAKE A TURN BASED ON DIFFICULTY LEVEL
    {
        reportScore("gameStatus", "Human Mode");
    }

}




//-*- Impossible Mode - Computer makes ideal move every time

function takeTheIdealMove() {
    return idealMoves[totalCounters - 1];
}

//-*- Random Move logic

// Pick a random number from 1 to 3 unless there are 2 counters left.
function randomMoveWithThree() {
    let guess3 = (Math.random() * 3);
    if (guess3 < 1) {
        return 1;
    } else if (guess3 < 2) {
        return 2;
    } else {
        return 3
    }
}

// -*- Decide randomly between taking 1 or 2 counters

function randomMoveWithTwo() {
    console.log('Using randomMoveWithTwo ...')
    let guess2 = (Math.random() * 2);
    console.log(guess2)
    if (guess2 < 1) {
        console.log('I will return 1');
        return 1
    } else {
        console.log('I will return 2');
        return 2
    }
}

//-*- Turn off Human Playability for 3 seconds whilst Computer 'thinks'

function thinkThenMove(diffLevel) {
    console.log('Human move is off');
    reportScore("gameStatus", "I am thinking ...");
    setTimeout(function () {
        levelledMove(diffLevel)
    }, 3000);
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



//-*- Levelled Move - receive difficulty level and return the number of counters to take 

function levelledMove(difficulty) {
    console.log('Human is off');

    myGo = (Math.random() * (difficulty + 3)); //Pass this function 50 for impossible 8 for hard, 3 for Medium Mode, 1 for Easy Mode
    console.log(`levelledMove received ${difficulty} and will return ${myGo}`)

    if (myGo > difficulty) {
        console.log('I chose to take a random move');
        let dec = makeRandomMove(totalCounters);
        console.log(`I decided to take ${dec} counters`);

          hideComputersCounters(dec);      
        
          totalCounters = totalCounters - dec;
        
        reportScore("gameStatus", "Computer Decided to take " + dec + " counters.");

        reportScore("totalCounters", totalCounters);
    } else {
        console.log('I chose to take an ideal move');
        let dec = takeTheIdealMove();
        console.log(`I decided to take ${dec} counters`)
        
        hideComputersCounters(dec);

        totalCounters = totalCounters - dec;

        reportScore("gameStatus", "Computer Decided to take " + dec + " counters.");

        reportScore("totalCounters", totalCounters);
        console.log('Human move is def back on');
    }

    // Pass play to player 1 UNLESS Computer has won.
    if (totalCounters === 0) {
        respondToWin();
    } else {
        whoseTurnItIs = 1;
        reportScore("whoseTurn", whoseTurnItIs);
    }
}


// -*- Take an impossible to beat move

// function perfectMove() {
//     let myDecision = takeTheIdealMove();
//     totalCounters = totalCounters - myDecision;
//     reportScore("gameStatus","Computer Decided to take "+ myDecision + " counters.");
//     reportScore("totalCounters", totalCounters);

//     // Pass play to player 1 UNLESS Computer has won.
//     if (totalCounters === 0) {
//         respondToWin();
//     } else {
//         whoseTurnItIs = 1;
//         reportScore("whoseTurn", whoseTurnItIs);
//     }
// }


// -*- Do the action of taking a Computers Turn in HARD MODE --- DON'T NEED THIS ANY MORE ---

// function computersHardModeTurn() { 
// console.log('I am in Hard Mode.');
// let guesshard = (Math.random()*11);
// console.log('My value is guess hard ' + guesshard)
// if (guesshard > 7.5) {
//     console.log('I will make a random move');
//     var decision = makeRandomMove(totalCounters);
//     console.log('I ran the makeRandomMove function and received ' + decision)
// }
// else
// {
//     console.log('I will make an impossible to beat move');
//     var decision = takeTheIdealMove();
//     console.log('I ran the impossible function and received ' + decision)
// }

// // let decision = makeRandomMove(totalCounters);
// totalCounters = totalCounters - decision;
// reportScore("gameStatus","Computer Decided to take "+ decision + " counters.");
// reportScore("totalCounters", totalCounters);

// // Pass play to player 1 UNLESS Computer has won.
// if (totalCounters === 0) {
//     respondToWin();
// } else {
//     whoseTurnItIs = 1;
//     reportScore("whoseTurn", whoseTurnItIs);
// }
// }


// -*- Do the action of taking a Computers Turn

function computersTurn() { // When working, must receive 50, 8, 3 or 1 for Impossible, hard, medium and easy

    let decision = makeRandomMove(totalCounters);

    totalCounters = totalCounters - decision;
    reportScore("gameStatus", "Computer Decided to take " + decision + " counters.");
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

// ----------------- jQuery Event Listeners  ----------------- 



$(document).ready(function () {



    $(".counter").click(function (e) {
        if (whoseTurnItIs === 2 && mode !== "human") {
            reportScore("gameStatus", "Human Clicks are off");
        } else {
            e.preventDefault();
            counterIsClicked();
            $(this).addClass('hidden');
        }
    });

    $("#impossiblemodebutton").click(function() {
        changeMode("impossible");
    });

    $("#hardmodebutton").click(function() {
        changeMode("hard");
    });

    $("#mediummodebutton").click(function() {
        changeMode("medium");
    });

    $("#easymodebutton").click(function() {
        changeMode("easy");
    });

    $("#humanmodebutton").click(function() {
        changeMode("human");
    });




});