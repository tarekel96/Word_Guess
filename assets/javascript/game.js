let wordList = ["apple", "orange", "banana", "pear"],
  mysteryWord = document.querySelector("#mystery-word"),
  aboutButton = document.querySelector("#about-btn"),
  aboutInfo = document.querySelector("#about"),
  inputWord = document.querySelector("#input-word"),
  letterArray = mysteryWord.children;

// toggles the about info section to display and not to display
aboutButton.addEventListener("click", function() {
  if (aboutInfo.hidden == true) {
    aboutInfo.hidden = false;
  } else if (aboutInfo.hidden == false) {
    aboutInfo.hidden = true;
  }
});

// random word chosen for user to guess - HOW IT WORKS:
let chosen = wordList[Math.floor(Math.random() * (wordList.length - 1))];
console.log(chosen);

//
function displayUnderlines() {
  for (letter of chosen) {
    let nodeSpan = document.createElement("SPAN");

    nodeSpan.innerHTML = " - ";
    mysteryWord.appendChild(nodeSpan);
  }
  console.log(letterArray[0]);
}

displayUnderlines();

function checkGuess() {
  // user inputs a letter

  for ([letter, index] of chosen) {
    if (letter === inputWord) {
      let correctGuess = letter;
      let correctPos = index;
    }
  }
}

checkGuess();

// user inputs a letter

// check if letter is in the chosen word - for loop

// if letter matches a letter in the chosen word, turn the letter in word to a variable

// replace the '-' value with the correctly guessed letter so the user can see the progress

//   let con = true

//   do {

//   }

//   while(con === true)
