document.addEventListener('DOMContentLoaded', () => {
  // the card items
  const cardArray = [
    {
      name: 'fries',
      img: './images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png',
    },
    {
      name: 'fries',
      img: './images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png',
    },
  ]
  // console.log(cardArray)
  // get grid from html document
  const grid = document.querySelector('.grid')
  // get result from html document
  const result = document.querySelector('#result')
  // get new-game-btn from html document
  const newGameBtn = document.querySelector('#new-game')
  // cards chosen
  let cardChosen = []
  // cards id
  let cardChosenId = []
  // let score = 0
  const cardsWon = []
  cardArray.sort(() => 0.5 - Math.random())

  // display result
  function resultDisplay() {
    result.textContent = localStorage.getItem('score')
    if (cardsWon.length === cardArray.length / 2) {
      result.textContent = 'Congratulation you have won the game'
    }
  }
  // check for match and presents the result
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]) {
      // eslint-disable-next-line no-alert
      alert('You found a match')
      cards[optionOneId].setAttribute('src', './images/white.png')
      cards[optionTwoId].setAttribute('src', './images/white.png')
      // eslint-disable-next-line no-use-before-define
      cards[optionOneId].removeEventListener('click', flipcard)
      // eslint-disable-next-line no-use-before-define
      cards[optionTwoId].removeEventListener('click', flipcard)
      cardsWon.push(cardChosen)
      localStorage.setItem('score', cardsWon.length)
    } else {
      cards[optionOneId].setAttribute('src', './images/blank.png')
      cards[optionTwoId].setAttribute('src', './images/blank.png')
      // eslint-disable-next-line no-alert
      alert('Sorry , you chose wrong cards')
    }

    cardChosen = []
    cardChosenId = []
    resultDisplay()
  }
  // flip your card
  function flipcard() {
    const cardId = this.getAttribute('data-id')
    // pushes the name of the care you clicked
    cardChosen.push(cardArray[cardId].name)
    // pushes the id of the care you clicked
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 100)
    }
  }
  // create a function for creating board
  function createBoard() {
    // console.log('create board')
    for (let i = 0; i < cardArray.length; i += 1) {
      const card = document.createElement('img')
      // cheat code
      // card.setAttribute('src', cardArray[i].img)
      // actual code
      card.setAttribute('src', './images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
      // removeBoard(card)
    }
  }
  // default  function that will be executed when the page reload
  function startGame() {
    createBoard()
    // localStorage.setItem('score', 0)
    resultDisplay()
  }
  startGame()
  // removes the old grid in the board
  function removeBoard() {
    grid.innerHTML = ''
  }
  // starts the new game
  function newGame() {
    removeBoard()
    createBoard()
    localStorage.setItem('score', 0)
    resultDisplay()
  }

  newGameBtn.addEventListener('click', newGame)
})
