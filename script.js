document.addEventListener('DOMContentLoaded', () => {
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
      name: 'ice-cream',
      img: './images/ice-cream.png',
    },
    {
      name: 'pizza',
      img: './images/pizza.png',
    },
    {
      name: 'milkshake',
      img: './images/milkshake.png',
    },
    {
      name: 'hotdog',
      img: './images/hotdog.png',
    },
    {
      name: 'fries',
      img: './images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: './images/cheeseburger.png',
    },
    {
      name: 'ice-cream',
      img: './images/ice-cream.png',
    },
    {
      name: 'pizza',
      img: './images/pizza.png',
    },
    {
      name: 'milkshake',
      img: './images/milkshake.png',
    },
    {
      name: 'hotdog',
      img: './images/hotdog.png',
    },
  ]
  // console.log(cardArray)
  // get grid
  const grid = document.querySelector('.grid')
  const result = document.querySelector('#result')
  // cards chosen
  let cardChosen = []
  let cardChosenId = []
  const cardsWon = []
  cardArray.sort(() => 0.5 - Math.random)

  // creates a board after execution

  // display result
  function resultDisplay() {
    result.textContent = cardsWon.length
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
      cardsWon.push(cardChosen)
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
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500)
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
    }
  }
  createBoard()
})
