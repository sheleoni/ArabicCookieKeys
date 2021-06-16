// prevent double click and selecting image function

const container = document.querySelector('.container')

container.addEventListener(
  'mousedown',
  function (e) {
    e.preventDefault()
  },
  false
)

// input text function

const display = document.querySelector('#output')

let word = ''

function inputWord(letter) {
  word += letter
  display.innerHTML = word
}
