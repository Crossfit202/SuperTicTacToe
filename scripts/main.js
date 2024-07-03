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
    console.log(this);

    if (div.textContent == '') {
        nextMoveLocation(this.classList.value);
        if (lastMove === 'Blank') {
            div.textContent = 'X';
            div.classList.add('X');
            lastMove = 'X';
        } else if (lastMove === 'X') {
            div.textContent = 'O';
            div.classList.add('O');
            lastMove = 'O';
        } else {
            div.textContent = 'X';
            div.classList.add('X');
            lastMove = 'X';

        }

    }

    //checkAllBoards();
}

// Removes the Highlight class from all the boards at once
function removeHighlight() {
    for (let i = 0; i < boards.length; i++) {
        boards[i].classList.remove('highlight');
    }
}

// Highlights the board for the next location.
function nextMoveLocation(nextBoard) {
    // Clear the currently highlighted board
    removeHighlight();

    // Add highlight class to the board that was selected
    switch(nextBoard) {
        case 'space a1':
            document.getElementById('board1').classList.add('highlight');
            break;
        case 'space a2':
            console.log(document.getElementById('board4'));
            document.getElementById('board4').classList.add('highlight');
            break;
        case 'space a3':
            document.getElementById('board7').classList.add('highlight');
            break;
        case 'space b1':
            document.getElementById('board2').classList.add('highlight');
            break;
        case 'space b2':
            document.getElementById('board5').classList.add('highlight');
            break;
        case 'space b3':
            document.getElementById('board8').classList.add('highlight');
            break;
        case 'space c1':
            document.getElementById('board3').classList.add('highlight');
            break;
        case 'space c2':
            document.getElementById('board6').classList.add('highlight');
            break;
        case 'space c3':
            document.getElementById('board9').classList.add('highlight');
            break;
        default:
            // do nothing do we need default then?
            break;
    }


}


for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', Move);
}


