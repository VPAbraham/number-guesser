var userMin = document.querySelector('#user-min');
var userMax = document.querySelector('#user-max');
var minDisplay = document.querySelector('#min-display');
var maxDisplay = document.querySelector('#max-display');
var conflictError = document.querySelector('#conflict-error');
var updateBtn = document.querySelector('#update-btn');
var submitBtn = document.querySelector('#submit-btn')
var resetBtn = document.querySelector('#reset-btn');
var clearBtn = document.querySelector('#clear-btn');
var playerOneName = document.querySelector('#player-one-name');
var playerTwoName = document.querySelector('#player-two-name');
var playerOneGuess = document.querySelector('#player-one-guess');
var playerTwoGuess = document.querySelector('#player-two-guess');
var guessOne = document.querySelector('#player1-guess');
var guessTwo = document.querySelector('#player2-guess');
var challengerOne = document.querySelector('#player-one');
var challengerTwo = document.querySelector('#player-two');
var leftSuggestion = document.querySelector('#left-tip');
var rightSuggestion = document.querySelector('#right-tip');

var leftSide = document.querySelector('.left-pane');
var rightSide = document.querySelector('.right-pane')

// Event Listeners

// leftSide.addEventListener('click', runAll)
updateBtn.addEventListener('click', updateRange);
clearBtn.addEventListener('click', clearFields);
submitBtn.addEventListener('click', submitFunc)
leftSide.addEventListener('keyup', disableBtns);
conflictError.addEventListener('click', guessesError);

// Functions
function guessesError() {
  if (userMin.value > userMax.value) {
    conflictError.style.visibility = 'visible';
  } else {
    conflictError.style.visibility = 'hidden';
  }
}

function disableBtns() {
  disableClear();
  disableReset();
}

function submitFunc(e) {
  e.preventDefault();
  displayGuess();
  displayName();
  guessesError();
  displayFeedback(playerOneGuess.value, leftSuggestion);
  displayFeedback(playerTwoGuess.value, rightSuggestion);
}

function updateRange() {
  guessesError();
  if (userMin.value === '' || maxDisplay.value === '') {
    minDisplay.innerText = '?';
    maxDisplay.innerText = '?';
  } else {  
    minDisplay.innerHTML = userMin.value;
    maxDisplay.innerHTML = userMax.value;
    useRange(userMin.value, userMax.value);
    userMin.value = '';
    userMax.value = '';
    displayFeedback(playerOneGuess.value, leftSuggestion);
    displayFeedback(playerTwoGuess.value, rightSuggestion);
  }
}

function clearGuess() {
  playerOneGuess.value = '';
  playerTwoGuess.value = '';
}

function disableClear() {
  if (playerOneGuess.value === '' && playerTwoGuess.value === '') {
    clearBtn.disabled = false;
  } else {
    clearBtn.disabled = true;
  }
}

function disableReset() {
  if (playerOneName.value && playerTwoName.value === '') {
    resetBtn.disabled = true;
  } else 
  resetBtn.disabled = false;
}

function clearFields() {
  clearGuess()
  guessOne.innerText = '?';
  guessTwo.innerText = '?';
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

// displayFeedback(playerOneGuess.value, leftTip)
function displayFeedback(num, element) {
  if (num > genNumber) {
    element.innerText = 'That\'s too high';
  } else if (num < genNumber) {
    element.innerText = 'That\'s too low';
  } else {
    element.innerText = 'BOOM!'
    appendArticle();
    var newNum = genNum();
    console.log(newNum)
  }
}

function appendArticle() {
if (rightSuggestion.innerText || leftSuggestion.innerText === 'BOOM!') {
    rightSide.insertAdjacentHTML('afterbegin', `<article class='winner'>
        <header class='winner__header'>
            <h4>CHALLENGER 1</h4>
            <p>VS</p>
            <h4>CHALLENGER 2 NAME</h4>
        </header>
        <h2 class='winner__name'>CHALLENGER 1 NAME</h2>
        <h3 class='winner__status'>WINNER</h3>
        <footer>
          <p class='winner__p'><span class='winner__span'>2</span> GUESSES</p>
          <p class='winner__p'><span class='winner__span'>23</span> MINUTES</p>
          <button>X</button>
        </footer>
        </header>`)
      }
}

