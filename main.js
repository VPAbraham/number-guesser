var userMin = document.querySelector("#user-min");
var userMax = document.querySelector("#user-max");
var minDisplay = document.querySelector("#min-display");
var maxDisplay = document.querySelector("#max-display");
var updateBtn = document.querySelector("#update-btn");
var submitBtn = document.querySelector("#submit-btn")
var resetBtn = document.querySelector("#reset-btn");
var clearBtn = document.querySelector("#clear-btn");
var playerOneName = document.querySelector('#player-one-name');
var playerTwoName = document.querySelector('#player-two-name');
var playerOneGuess = document.querySelector("#player-one-guess");
var playerTwoGuess = document.querySelector("#player-two-guess");
var guessOne = document.querySelector('#player1-guess');
var guessTwo = document.querySelector('#player2-guess');
var challengerOne = document.querySelector('#player-one');
var challengerTwo = document.querySelector('#player-two');
var leftTip = document.querySelector('#left-tip');
var rightTip = document.querySelector('#right-tip');

var leftSide = document.querySelector(".left-pane");

// Event Listeners

// leftSide.addEventListener('click', runAll)
updateBtn.addEventListener("click", updateRange);
clearBtn.addEventListener('click', clearFields);
submitBtn.addEventListener('click', submitFunc)
leftSide.addEventListener("keyup", disableBtns);

// Functions

function disableBtns() {
  disableClear();
  disableReset();
}

function submitFunc(e) {
  e.preventDefault();
  displayGuess();
  displayName();
  displayLeftFeedback();
  displayRightFeedback();
}

function updateRange() {
  minDisplay.innerHTML = userMin.value;
  maxDisplay.innerHTML = userMax.value;
  useRange(userMin.value, userMax.value);
  userMin.value = "";
  userMax.value = "";
}

function clearGuess() {
  playerOneGuess.value = '';
  playerTwoGuess.value = '';
}

function disableClear() {
  if (playerOneGuess.value && playerTwoGuess.value === '') {
    clearBtn.disabled = true;
  } else {
    clearBtn.disabled = false;
  }
}

function disableReset() {
  if (playerOneName.value && playerTwoName.value === '') {
    resetBtn.disabled = true;
  } else 
  resetBtn.disabled = false;
}

function clearFields() {
  playerOneGuess.value = '';
  playerTwoGuess.value = '';
  guessOne.innerText = 97;
  guessTwo.innerText = 3;
  disableClear();
}


function displayGuess() {
  guessOne.innerText = playerOneGuess.value;
  guessTwo.innerText = playerTwoGuess.value;
}

function displayName() {
  challengerOne.innerText = playerOneName.value;
  challengerTwo.innerText = playerTwoName.value;
}

function genNum() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

console.log(genNum())

function useRange(min, max) {
  var min = parseInt(min);
  var max = parseInt(max);
  genNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(genNumber)
}

function displayLeftFeedback() {   
  if (playerOneGuess.value > genNumber) {
    leftTip.innerText = 'That\'s too high';
  } else if (playerOneGuess.value < genNumber) {
    leftTip.innerText = 'That\'s too low';
  } else if (playerOneGuess.value === genNumber) {
    leftTip.innerText = 'BOOM!'
  }
}

function displayRightFeedback() {
  if (playerTwoGuess.value > genNumber) {
    rightTip.innerText = "That's too high";
  } else if (playerTwoGuess.value < genNumber) {
    rightTip.innerText = "That's too low";
  } else if (playerTwoGuess.value === genNumber) {
    rightTip.innerText = "BOOM!";
  }
}

