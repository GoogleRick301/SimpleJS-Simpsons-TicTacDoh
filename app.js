document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')

    let currentPlayer = 'Player X'

    squares.forEach(square => {
       square.addEventListener('click', clickOutcome) 
    })

    function clickOutcome (e) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(e.target)
        playerDisplay.innerHTML = currentPlayer

        if(currentPlayer === 'Player X') {
            squares[index].classList.add('playerX')
            currentPlayer = 'Player O'
        } else {
            squares[index].classList.add('playerO')
            currentPlayer = 'Player X'
        }
    }
}) 