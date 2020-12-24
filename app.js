document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        }
    ]

    const grid = document.querySelector('.grid')

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = card.createElement('img')
            card.setAtrribut('src', 'images/blank.png')
            card.setAtrribut('data-id', id)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
            
        }
    }
})