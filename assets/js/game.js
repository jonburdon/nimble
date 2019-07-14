// Declare variables
let whoseTurnItIs = 1;
let countersTakenThisTurn = 0;
let totalCounters = 21;
// The idealMoves array contains the ideal strategic move, which will cause the computer to win every time.
let idealMoves = [1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1, 2, 3, 1, 1];
let mode = "human";
let quitting = false;
let silence = false;
let playing =false;
let musicon = false;
let playerchecker;
let firstgo = true;
let music = new Audio('assets/audio/260566_zagi2_pop-rock-loop-3(online-audio-converter.com).mp3');

// ----------------- Functions to access DOM  ----------------- 

// -*- reportScore Function to take a variable and place it on the DOM

function reportScore(target, score) {
    document.getElementById(target).innerHTML = score;
}

// ----------------- Functions to initialise the game  ----------------- 

// -*- Set up scores at start of game

function restartScores() {
    whoseTurnItIs = chooseWhoGoesFirst();
    // console.log(`It is player ${whoseTurnItIs} first ..`)
    countersTakenThisTurn = 0;
    totalCounters = 21;
    
}

function displayStartScores() {
    reportScore("totalCounters", totalCounters);
        reportScore("whoseTurn", whoseTurnItIs);
        reportScore("gameStatus", "");
        reportScore("takenThisTurn", countersTakenThisTurn);
};


// -*- choose who goes first randomly.

function chooseWhoGoesFirst() {
    // console.log('Choosing who goes first ...')
    let playDec = (Math.random() * 2);
    // console.log(`Ransom decision is ${playDec}`)
    if (playDec < 1) {
        // console.log('P1 can go first this time');
        return 1
    } else {
        // console.log('P2 can go first this time');
        return 2
    }
}

//-*- hide before game buttons
function hideBeforeGameButtons() {
    $(".impossiblemodebutton, .mediummodebutton, .hardmodebutton, .easymodebutton, .humanmodebutton, .startgamebutton").addClass("hidden");
}

//-*- unhide buttons
function showGamePlayButtons() {
    $(".duringgame").removeClass("hidden");
}

//-*- Set up display for start screen
function startDisplay() {
    $(".duringgame").addClass("hidden");
    $(".beforegame").removeClass("hidden");
    reportScore("gameStatus",`Choose difficulty level 
    <i class=" far fa-user-circle" aria-hidden="true"></i> <br>or start <i class=" far fa-play-circle" aria-hidden="true"></i>`);
}

// -*- RUNS START OF GAME FUNCTIONS

function startGame() {
    // asignWhoGoesFirst();
    startDisplay();
    hideBeforeGameButtons();
    showGamePlayButtons();
    showAllCounters();
    restartScores();
    displayStartScores();


    showPlayHasChanged();


    if (whoseTurnItIs === 2 && mode !== "human") {
        reportScore("gameStatus","Computer will start play this time ...")
        humanOrComputer();
    } else {

    }
}

// ----------------- Game Settings  ----------------- 

// -*- Change difficulty mode

function changeMode(choice) {
    mode = choice;
    // console.log(`${mode} selected by changeMode function`);

if (mode === "human") {
    reportScore("gameStatus", `Mode set to two player mode.`)
}
else {
    reportScore("gameStatus", `You chose the play the Computer at ${mode} difficulty level.`)
}

}

// ----------------- Functions to control gameplay  ----------------- 

//-*- Remove Nth counter
function hideNthCounter(counterNumber) {
    $(`.counter:nth-of-type(${counterNumber})`)
        .addClass("hidden");
}

// -*- Hide counters taken by computer 

function hideComputersCounters(num) {
    for (i = num; i > 0; i--) {
        // console.log(`TAKING COUNTER... Total Counters is ${totalCounters} TOTAL TO TAKE IS ${num} counter to take this time is ${totalCounters-(i-1)}th`);
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
        countersTakenThisTurn = 0;
        return true;
    } else {
        return false;
    }
}

// -*- checkSwitchPlayer Switches Player if checkPassTurn returns True

function checkSwitchPlayer(currentPlayer) {
    let check = checkPassTurn(countersTakenThisTurn);
    if (check) {
        return (currentPlayer === 1) ? 2 : 1;
    } else {
        return currentPlayer
    }
}

// -*- Do the action of switching player automatically

function switchPlayer() {
playerchecker = whoseTurnItIs;
    whoseTurnItIs = checkSwitchPlayer(whoseTurnItIs);
if (playerchecker != whoseTurnItIs && totalCounters > 0) {
    showPlayHasChanged();
    firstgo = false;
}
else
{}


}


// -*- counterClicked - EXECUTE COUNTER CLICK FUNCTIONS - Above

function counterIsClicked() {
    reportScore("gameStatus","");
    playClick('assets/audio/376968__elmasmalo1__bubble-pop.wav');
    reportScore("whoseTurn", whoseTurnItIs);
    countersTakenThisTurn = increaseCountersTaken(countersTakenThisTurn);
    totalCounters = decreaseOverallCounters(totalCounters);
    reportScore("totalCounters", totalCounters);
    switchPlayer();
    reportScore("whoseTurn", whoseTurnItIs);
    reportScore("takenThisTurn", countersTakenThisTurn);
    if (totalCounters > 0) {
        humanOrComputer();
    } else {}
    
    activateWinSequenceTest();
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

//-*- hide game play buttons
function hideGamePlayButtons() {
    $(".duringgame").addClass("hidden");
}

//-*- show before game buttons
function showBeforeGameButtons() {
    $(".beforegame").removeClass("hidden");
}

function respondToWin() {
if (whoseTurnItIs === 1 || mode === "human") {
    reportScore("gameStatus", "Game Over, Player " + whoseTurnItIs + " has Won!");
}
else 
{
    
    reportScore("gameStatus", "Game Over, Computer has Won!");
}

    mode = "human";
    firstgo = true;
if (whoseTurnItIs === 2 && mode !== "human") {
    // console.log('Increase Computer Score Tally by 1');
    // localStorage.setItem("computerScoreTally", userName);
} else if (whoseTurnItIs === 1) {
    // console.log('Increase Player 1 Score Tally by 1');
} else {
    // console.log('Increase Player 2 Score Tally by 1');
}
    // Also need to clear screen etc, and update High Score tables etc
}

function activateWinSequenceTest() {
    if (checkForWin(totalCounters)) {
        hideGamePlayButtons();
        showBeforeGameButtons();
        respondToWin();

    }
}

// ----------------- Functions to control the changing of turns  ----------------- 

// -*- Display Change of Turn box, then hide it again

function showPlayHasChanged() {

if (quitting) {
        reportScore("changeofplayermessage","You have ended the game early. Nobody wins.");
    }

else if (firstgo === false && countersTakenThisTurn === 0) {
    reportScore("changeofplayermessage","You must take at least one counter.");
}

else if (mode != "human") {

    if (firstgo === false) {
        reportScore("changeofplayermessage","It is the Computer's Turn.");
    }
    else {
        reportScore("changeofplayermessage","The Computer will go first...");  
    }

}
else
{
    if (firstgo === false) {
        reportScore("changeofplayermessage",`It is Player ${whoseTurnItIs}'s turn next...`);
    }
    else {
        reportScore("changeofplayermessage",`Player ${whoseTurnItIs} will go first...`);  
    }
    
}

    $(".playerturnbox").removeClass('hidden');

    setTimeout(function () {
        $(".playerturnbox").addClass('hidden')
    }, 1500);
firstgo = false;
}

// ----------------- Functions to run when a the PASS PLAY Button has been clicked  ----------------- 

// -*- checkPassAllowed Check if passing play to other player is allowed, and if so, swap whose turn it is

function checkPassAllowed(passcheck) {
    // console.log('checkPassAllowed initiated');
    // console.log('whoseTurnItIs:' + whoseTurnItIs);
    if (passcheck > 0) {
        // console.log('passcheck(whoseTurnitis) is found to be >0');
        if (whoseTurnItIs === 1) {
            // console.log('whoseTurnItIs is found to be 1, so return 2');
            
            return 2;
        } else {
            // console.log('whoseTurnItIs is not found to be 1, so return 1');
            
            return 1;
        }
    } else {
        // console.log('not found to be great than zero');
        reportScore("gameStatus","Please take at least one counter!");
        return whoseTurnItIs;
        
    }
}

// -*- passTurnToOtherPlayerManually - EXECUTE OTHER FUNCTIONS to update DOM by changing the player ONLY if allowed.

function passTurnToOtherPlayerManually() { // Call this function when 'PASS' Button is clicked
    whoseTurnItIs = checkPassAllowed(countersTakenThisTurn);
    showPlayHasChanged();
    countersTakenThisTurn = 0;
    reportScore("whoseTurn", whoseTurnItIs);
    reportScore("takenThisTurn", countersTakenThisTurn);
    humanOrComputer();
}

// ----------------- Functions for Human Vs Computer  ----------------- 

// -*- If Human v Human, do nothing, otherwise make a move based on difficulty mode and return play to P1

function humanOrComputer() {
    // console.log(`It is player ${whoseTurnItIs} 's turn according to HorC function`);
    if (mode !== "human" && whoseTurnItIs === 2) { // IF HUMAN UPDATE STATUS

        if (mode === "impossible") {
            // console.log('Impossible Mode activated in humanOrComputer');
            thinkThenMove(50);
        } else if (mode === "hard") {
            // console.log('Hard Mode activated in humanOrComputer');
            thinkThenMove(8);
        } else if (mode === "medium") {
            // console.log('Medium Mode activated in humanOrComputer');
            thinkThenMove(3);
        } else { // DEFAULT TO EASY MODE
            // console.log('Easy Mode activated in humanOrComputer');
            thinkThenMove(1);
        }

    } else 
    {
        // reportScore("gameStatus", `Player 1s Turn`);
    }
// showPlayHasChanged();
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
    // console.log('Using randomMoveWithTwo ...');
    let guess2 = (Math.random() * 2);
    // console.log(guess2);
    if (guess2 < 1) {
        // console.log('I will return 1');
        return 1
    } else {
        // console.log('I will return 2');
        return 2
    }
}

//-*- Turn off Human Playability for 3 seconds whilst Computer 'thinks'

function thinkThenMove(diffLevel) {
    // console.log('Human move is off');
    reportScore("gameStatus", "I am thinking ...");
    setTimeout(function () {
        levelledMove(diffLevel)
    }, 3000);
}


// -*- Make a computer move based on how many counters are left - 1, 2 or 3

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
    // console.log('Human is off');

    let myGo = (Math.random() * (difficulty + 3)); //Pass this function 50 for impossible 8 for hard, 3 for Medium Mode, 1 for Easy Mode
    // console.log(`levelledMove received ${difficulty} and will return ${myGo}`);

    if (myGo > difficulty) {
        // console.log('I chose to take a random move');
        let dec = makeRandomMove(totalCounters);
        // console.log(`I decided to take ${dec} counters`);

          hideComputersCounters(dec);      
        
          totalCounters = totalCounters - dec;
        
        reportScore("gameStatus", "I decided to take " + dec + " counters.");

        reportScore("totalCounters", totalCounters);
        
    } else {
        // console.log('I chose to take an ideal move');
        let dec = takeTheIdealMove();
        // console.log(`I decided to take ${dec} counters`);
        
        hideComputersCounters(dec);

        totalCounters = totalCounters - dec;

        reportScore("gameStatus", "I decided to take " + dec + " counters.");

        reportScore("totalCounters", totalCounters);
        // console.log('Human move is def back on');
        
    }

    // Pass play to player 1 UNLESS Computer has won.
    if (totalCounters === 0) {
        // respondToWin();
        activateWinSequenceTest();
    } else {
        whoseTurnItIs = 1;
        reportScore("whoseTurn", whoseTurnItIs);
    }
    
}


// -*- Do the action of taking a Computers Turn

function computersTurn() { 

    let decision = makeRandomMove(totalCounters);

    totalCounters = totalCounters - decision;
    reportScore("gameStatus", "I decided to take " + decision + " counters.");
    reportScore("totalCounters", totalCounters);

    // Pass play to player 1 UNLESS Computer has won.
    if (totalCounters === 0) {
        // respondToWin();
        activateWinSequenceTest();
    } else {
        whoseTurnItIs = 1;
        reportScore("whoseTurn", whoseTurnItIs);
    }

}

// ----------------- Audio Controls  -----------------


//-*- Play a short click sound

function playClick(url) {
    var a = new Audio(url);
        a.play();}

function startMusic () {
    music.loop=true;
    music.play();
    musicon = true;
}

function stopMusic () {
    music.pause();
    musicon = false;
}

function toggleMusic() {
if (musicon) {
    stopMusic();
} else {
    startMusic();
}
}


// ----------------- jQuery Event Listeners  ----------------- 


$(document).ready(function () {




    $(".clickcounterbutton").click(function (e) {
        if (whoseTurnItIs === 2 && mode !== "human") {
            reportScore("gameStatus", "Oy! You can't take a counter! It's not your turn.");
        } else {
            
            if (totalCounters > 0) {

                e.preventDefault();
                hideNthCounter(totalCounters);
                counterIsClicked();
                // $(this).addClass('hidden');

            } else {
                reportScore("gameStatus","The Game is Over.")
            }

        }
    });

// Hide this button, and show the next one - IMPROVEMENT NEEDED: make one, more efficient function instead of five



    $(".impossiblemodebutton").click(function() {
        changeMode("human");
        $(this).addClass('hidden');
        $(".humanmodebutton").removeClass('hidden');
    });

    $(".hardmodebutton").click(function() {
        changeMode("impossible");
        $(this).addClass('hidden');
        $(".impossiblemodebutton").removeClass('hidden');
    });

    $(".mediummodebutton").click(function() {
        changeMode("hard");
        $(this).addClass('hidden');
        $(".hardmodebutton").removeClass('hidden');
    });

    $(".easymodebutton").click(function() {
        changeMode("medium");
        $(this).addClass('hidden');
        $(".mediummodebutton").removeClass('hidden');
    });

    $(".humanmodebutton").click(function() {
        changeMode("easy");
        $(this).addClass('hidden');
        $(".easymodebutton").removeClass('hidden');
    });

    $(".startgamebutton").click(function() {
        $(".modechoosingscreen").addClass("hidden");
        $(".playingdisplay").removeClass("hidden");
        startGame();
    });


    $(".quitbutton").click(function() { 
        $(".quitbox").removeClass('hidden');
    });

    $(".quitconfirmbutton").click(function() {
        $(".quitbox").addClass('hidden');
        quitting = true;
        startGame();
        startDisplay();
        quitting = false;
        firstgo = true;
        mode = "human";
    });

    $(".quitdenybutton").click(function() {
        
        $(".quitbox").addClass('hidden');
    });

    $("#helpbutton").click(function() { 
        $(".helpbox").removeClass('hidden');
    });

    $(".helpconfirmbutton").click(function() {
        $(".helpbox").addClass('hidden');    
    });

    $("#muteaudiobutton").click(function() {
        muteaudio();
    });

    $("#startmusicbutton").click(function() {
        toggleMusic();
    });

    $(".smallcirclebutton, .passplaybutton, .startarrow, #triangleright").click(function() {
        // console.log('button click for sound.');
        playClick('assets/audio/376968__elmasmalo1__bubble-pop.wav');
    });


    $(".passplaybutton").click(function (e) {
        if (whoseTurnItIs === 2 && mode !== "human") {
            reportScore("gameStatus", "Oy! You can't click this whilst I'm thinking...");
        } else {
            
            if (totalCounters > 0) {

                e.preventDefault();
                passTurnToOtherPlayerManually();

            } else {
                reportScore("gameStatus","The Game is Over.")
            }
        }
    });


});




