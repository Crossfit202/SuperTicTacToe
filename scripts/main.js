var lastMove = 'Blank';
var p1Score = 0;
var p2Score = 0;
var won = false;
var boards = document.getElementsByClassName('board');
var spaces = document.getElementsByClassName('space');


function checkWin(boardId) {
    const board = document.getElementById(boardId);

    const a1 = board.querySelector('.a1').textContent.trim();
    const a2 = board.querySelector('.a2').textContent.trim();
    const a3 = board.querySelector('.a3').textContent.trim();
    const b1 = board.querySelector('.b1').textContent.trim();
    const b2 = board.querySelector('.b2').textContent.trim();
    const b3 = board.querySelector('.b3').textContent.trim();
    const c1 = board.querySelector('.c1').textContent.trim();
    const c2 = board.querySelector('.c2').textContent.trim();
    const c3 = board.querySelector('.c3').textContent.trim();

    const winningCombinations = [
        [a1, a2, a3],
        [b1, b2, b3],
        [c1, c2, c3],
        [a1, b1, c1],
        [a2, b2, c2],
        [a3, b3, c3],
        [a1, b2, c3],
        [c1, b2, a3]
    ];

    for (let combo of winningCombinations) {
        if (combo.every(cell => cell === 'X')) {
            console.log(`Player X has won on ${boardId}!`);
            return `Player X on ${boardId}`;
        }
        if (combo.every(cell => cell === 'O')) {
            console.log(`Player O has won on ${boardId}!`);
            return `Player O on ${boardId}`;
        }
    }

    return null; // No winner
}

function checkAllBoards() {
    let winners = []; // Array to store winners

    for (let i = 1; i <= 9; i++) {
        const boardId = `board${i}`;
        const winner = checkWin(boardId);
        if (winner) {
            winners.push(winner);
            console.log(winners);
        }
    }


}


// 
function Move() {
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;


    if (p1 === '') {
        p1 = 'Player 1';
    }

    if (p2 === '') {
        p2 = 'Player 2';
    }
    var div = this;
    if (div.textContent == '') {
        if (lastMove === 'Blank') {
            div.textContent = 'X';
            div.classList.add('X')
            lastMove = 'X';
        } else if (lastMove === 'X') {
            div.textContent = 'O';
            div.classList.add('O')
            lastMove = 'O';
        } else {
            div.textContent = 'X';
            div.classList.add('X')
            lastMove = 'X';

        }
    }

    checkAllBoards();
}

// Highlights the board for the next location.
function nextMoveLocation() {
    var board = document.getElementsByClassName('board3')
    board.classList.add('highlight');


}


for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', Move);
}


