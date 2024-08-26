let word = "benediction"
let newWordIndex = 0
function sayGuess() {
  const userAnswer = document.querySelector("#answer-box").value.trim()
  if (userAnswer == word) {
    alert("You win!!")
  } else {
    alert("You lose. the word is " + word)
  }
}

const answer = document.querySelector("#answer")
const container = document.querySelector("#container")
const guessButton = document.querySelector("#answer-button")
const newGameButton = document.querySelector("#new-game-button")
newGameButton.addEventListener("click", () => {
  const newWord = wordList[newWordIndex]
  newWordIndex++
  word = newWord
  setBoard(newWord)

})

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

function putBar(angle) {
  const container = document.querySelector("#container")
  let el = document.createElement("div")
  el.classList.add("bar")
  el.style.cssText += `rotate: ${angle}deg`
  container.appendChild(el)
}

function putLetter(letter, angle) {
  const container = document.querySelector("#container")
  let el = document.createElement("p")
  let span = document.createElement("span")
  let text = document.createTextNode(letter)
  el.appendChild(span)
  span.appendChild(text)
  span.classList.add("block-span")
  el.style.cssText += `transform: rotate(${angle}deg);`
  span.style.cssText += `transform: rotate(-${angle}deg);`
  container.appendChild(el)
}

function setBoard(word) {
  document.querySelector("#answer-box").focus()
  const answer = document.querySelector("#answer")
  answer.textContent = word
  console.log(answer.textContent)
  guessButton.removeEventListener("click", sayGuess)
  guessButton.addEventListener("click", sayGuess )
  let letterCount = word.length
  container.innerHTML = ''
  // shift the letters
  let randShift = Math.floor(Math.random() * letterCount);
  wordArray = word.split('')
  wordArray = wordArray.concat(wordArray.splice(0,randShift))
  word = wordArray.join('')
    console.log(word)

  // maybe reverse the letters
  let doReverse = Math.floor(Math.random() * 2);
  if (doReverse) {
    word = [...word].reverse().join("")
  }

  // replace a random letter with a question mark
  let randSlot = Math.floor(Math.random() * letterCount);
  word = setCharAt(word, randSlot, "?")

  let degrees = 360 / letterCount;
  let starter = degrees / 2
  console.log(word)
  let letter = word[0]
  letter = letter.slice(1)
  for (let angle  = 0 + starter; angle < 360 + starter+1; angle = angle + degrees) {
    putLetter(letter, angle)
    letter = word[0]
    word = word.slice(1)
    putBar(angle-starter)
  }

}

setBoard(word)

const wordList = [
  "communist",
  "liberal",
  "fascist",
  "obedience"
] 
