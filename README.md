# Nimble - learn an ancient logical game

---
[View Site on GitHub Pages](https://jonburdon.github.io/nimble-javascript-game/)
---

This website project is a logical puzzle game. The site features a javascript game which is designed to be an introduction to the ancient game of Nim.
The primary goal of the site is to engage people with playing the game.

---

## Project Overview

### Developer Goals
* A first try at Javascript for writing a game.
* Implement basic level Jasmine tests.

## UX
### Project Goals
* A game to test logical skill and develop skills of prediction
* Visually appealing, with an app like feel
* Simple human vs computer play
* A color scheme which is vibrant and on trend.

### Player Goals
* The game should fun and appealing
* Easy enough to learn how to play but still a challenging puzzle game.
* Be able to crack the logic needed to become unbeatable.

### User Stories
As a player aged 7+ I want to be able to
1. Easily learn how to play the game straight away with minimal instructions.
2. Get audio and visual feedback when I remove a counter.
3. Be able to play the game easily on a mobile screen with one thumb or finger.
4. Be able to play against another player, or the computer.

### Wireframes

---
[Initial wireframe sketch for this project can be viewed here:](wireframes/nimble-wireframe.jpg)
---

## Features

* This is a one page game comprising of a start screen and a game play screen, both being made visible as appropriate.
* Navigation is using simple coloured buttons alongside a header, which are responsible on all screen sizes.
* A bright an exciting colour theme was selected.
* A large pulsing play button displays on the home screen, so that the game can be started with one click if a player is familiar with the game.
* For those unfamiliar with the game, there is a help page which explains the idea behind the game.
* Icons have been used throughout the game to make navigation and gameplay as intuitive and easy to access as possible.
* Buttons display a box shadow and play a sound when clicked.
* Game play is possible against a range of opponents - a two player game (human vs human), or against a computer, with 4 difficulty levels.
* Easy mode take a random move 75% of the time, with a tactical move being taken only 25% of the time.
* The 'impossible mode' operates an unbeatable move 95% of the time.
* Background music can be played if desired.
* Messages are given to the player when play changes turn, or when the computer takes a turn. These functions use setTimeOut to display the message for long enough for the user to read them.

## Technologies used
* HTML, CSS and Javascript programming languages
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
* [Flex](http://flexboxgrid.com/) as implemented through Bootstrap 4
* [VSCode](https://code.visualstudio.com/) Files were created locally using Visual Studio. GIT was used to push files to Github
* [jQuery](https://jquery.com/) was used throughout, particularly to watch for events in the DOM and react accordingly.
* [Jasmine] (https://jasmine.github.io/) tests were used during early staged of development to ensure the functions were behaving as expected.
* [Popper.js](https://popper.js.org/) was loaded by Bootstrap in order to implement the collapsable navbar
* [Git](https://git-scm.com/)

### Tools used for automation
- To validate html: https://validator.w3.org/
- To validate css: https://jigsaw.w3.org/css-validator/
- To check Javascript for errors: https://www.jslint.com/
- To pick colours from image when building colour scheme: https://imagecolorpicker.com/

### Ideas for development and plans:

1. [ ] Change the colour scheme depending on whose turn it is
2. [ ] High Score table to log the wins by a particular player against a particular difficulty level
3. [x] Play against a human or computer
4. [ ] Choose a colour theme eg dark mode, light mode.
5. [x] Randomly choose who goes first
6. [ ] Computer makes comments on the quality of your move - ie was it a good move? Quirky, boastful personality to tease the player.
7. [ ] Audio plays by default on a mobile but not on a desktop, can be muted on either. Click sounds can be muted.
8. [ ] 'Classic' mode, with random number of stacks of counters. You can take as many as you like from any stack.
9. [ ] Implement Jasmine tests more fully, and for those functions which access the DOM
10. [ ] Earn 'badges' for achievements. Eg 10 wins in a row against Easy Mode.
11. [ ] Alter UI to allow playing by clicking on the counters themselves.

## Testing

### Testing protocol for each page

Jasmine testing was implemented during the early staged of the project. The developer used a TDD approach. As development continued, this approach was discontinued. Tests were carried out by using console logs to show the behaviour of various functions.

User testing - the game was presented to users of a variety of ages for feedback on usability and difficulty levels.

The following testing protocols were followed for each page on desktop, mobile, tablet and smart TV devices.

* *Navigation Buttons*
1. Verify that each button correctly displays the content when clicked.
2. Verify that each buton makes a sound when clicked.
4. Verify that each button displays a box shadow and changes position when clicked.
5. Verify that the change mode buttons switch functionality when clicked.
6. Change the width of the browser to ensure the navbar collapses when expected.
7. Hover over buttons and verify that cursor: pointer is active.
8. Verify that text is readable on different screen sizes.
9. Verify that sound plays and can be muted.

* *Page content*
1. Resize the width of the browser and verify that the content resizes for different screen sizes as expected.
2. Verify that any content that should be hidden during game play is hidden, and any content hidden before the game has started is also hidden.
3. Verify that text in the status bar does not overflow the container on any screen size.
4. Verify there is no overflow.

* *Gameplay*
1. Verify that the game confirms who is playing first, whether this is a human or computer opponent.
2. Verify that pass is not possible unless at least one counter has been clicked.
3. Verify that play passes to the other player when the pass play button has been clicked.
4. Verify that pay passes to the other player automatically after 3 counters have been taken.
5. Verify that values in the scoreboard update as expected.
6. Verify that the game ends when the last counter has been taken.
7. Verify that the correct player is designated as the winner.
8. Verify that the winner is announced.
9. Verify that the Computer takes an 'ideal' move every time when playing in impossible mode.
10. Verify that the Computer takes an 'ideal' move 25% of the time in easy mode.
11. Verify difficulty levels behave as expected in medium and hard modes.

* Misc
1. Verify that the favicon has loaded.

## Deployment

This site is hosted on GitHub pages, and deployed from the master branch using the following method:

1. Navigate to repository
2. Click on the settings cog
3. Scroll down to Github Pages section
4. Select Source dropdown
5. Select Master Branch
6. Copy link provided

The deployed site will update automatically upon new commits to the this branch. 
In order for the site to deploy correctly on GitHub pages, the home page must be named index.html.

*To run locally*, you should clone the repository directly into the IDE of your choice as follows. 

1. From [this repository](https://github.com/jonburdon/nimble) this repository click the green Clone or Download button.

2. *OR* Copy the following:  `git clone https://github.com/jonburdon/nimble.git`

3. Paste the copied link into the terminal of your IDE. :+1:

4. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.
 
Use this [Video Tutorial on how to clone a Github Repository](https://www.youtube.com/watch?v=O72FWNeO-xY) or see GitHub help pages for more support.


### Credits:
https://freesound.org/people/zagi2/sounds/260566/
https://freesound.org/people/elmasmalo1/sounds/376968/
Converted to mp3 with: https://online-audio-converter.com/
Favicon from: https://icons8.com/icons/set/hand-point
Color Scheme taken from:
https://visme.co/blog/website-color-schemes/

## Thanks go to my Code Institute fellow students who have assisted me with this project :+1: :metal:

## Disclaimer

This project is for educational purposes only and copyright permission has not been obtained for each image.
