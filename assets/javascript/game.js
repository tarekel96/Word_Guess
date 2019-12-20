let wordList = ["apple", "orange", "banana", "pear"],
  mysteryWord = document.querySelector("#mystery-word"),
  aboutButton = document.querySelector("#about-btn"),
  aboutInfo = document.querySelector("#about"),
  inputWord = document.querySelector("#input-word"),
  letterArray = mysteryWord.children;

aboutButton.addEventListener("click", function() {
  if (aboutInfo.hidden == true) {
    aboutInfo.hidden = false;
  } else if (aboutInfo.hidden == false) {
    aboutInfo.hidden = true;
  }
});

function displayUnderlines() {
  let chosen = wordList[Math.floor(Math.random() * (wordList.length - 1))];
  console.log(chosen);
  for (letter of chosen) {
    let node = document.createElement("SPAN");
    node.innerHTML = " _ ";
    mysteryWord.appendChild(node);
  }
  console.log(letterArray[0]);
}

displayUnderlines();

// function randomWord() {
//   let chosen = wordList[Math.floor(Math.random() * (wordList.length - 1))];
//   console.log(chosen);
//   return chosen;
// }

// randomWord();
