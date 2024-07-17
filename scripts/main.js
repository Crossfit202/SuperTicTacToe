var lastMove = 'Blank';
var p1Score = 0;
var p2Score = 0;
var won = false;
var boards = document.getElementsByClassName('board');
var spaces = document.getElementsByClassName('space');
var moveCount = 0;
var winners = []; // Array to store winners

// Takes a board ID and returns true or false if that board is in winners
function checkBoard(boardID) {
    // loop through winners array to see if it matches board ID
    for (var i = 0; i < winners.length; i++) {
        if (winners[i][1] === boardID) {
            return true;
        }
    }

    return false;
}

// Takes a board ID and checks if that board has a winner or not
// Returns an array of [winner, boardID] ex. ['X', 'board1']
// otherwise returns null
function checkWin(boardId) {
    const board = document.getElementById(boardId);
    var boardWinner = [];

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
            boardWinner.push('X');
            boardWinner.push(boardId);
            return boardWinner;
        }
        if (combo.every(cell => cell === 'O')) {
            boardWinner.push('O');
            boardWinner.push(boardId);
            return boardWinner;
        }
    }

    return null; // No winner
}

// Runs through all the boards looking for new winners and adds them
// to the winners list
function checkAllBoards() {

    for (let i = 1; i <= 9; i++) {
        const boardId = `board${i}`;
        const winner = checkWin(boardId);

        // if there's a winner add to the array
        if (winner) {

            if (winners.length === 0) {             // if winners is empty just push the first winner
                winners.push(winner);
            } else if (!checkBoard(winner[1])) {    // if winners is not empty, check if the winner is already in the array
                winners.push(winner);
            }
        }
    }


}


// 
function Move() {
    var p1 = document.getElementById('p1').value;
    var p2 = document.getElementById('p2').value;
    checkAllBoards();
    console.log(winners);
    console.log(winners.length);
    

    if (p1 === '') {
        p1 = 'Player 1';
    }

    if (p2 === '') {
        p2 = 'Player 2';
    }
    var div = this;
    // console.log(this.parentNode.id);

    if (moveCount === 0) {
        nextMoveLocation(this.classList.value);
        div.textContent = 'X';
        div.classList.add('X');
        lastMove = 'X';
        moveCount++;
    }
    else {
        if (div.textContent == '') {
            if (this.parentNode.classList[1] === 'highlight') {
                nextMoveLocation(this.classList.value, this.parentNode.id);
                if (lastMove === 'X') {
                    div.textContent = 'O';
                    div.classList.add('O');
                    lastMove = 'O';
                    moveCount++;
                } else {
                    div.textContent = 'X';
                    div.classList.add('X');
                    lastMove = 'X';
                    moveCount++;
        
                }
            }
        }
    }
    

        


}

// Removes the Highlight class from all the boards at once
function removeHighlight() {
    for (let i = 0; i < boards.length; i++) {
        boards[i].classList.remove('highlight');
    }
}

// highlights everyboard that is playable.
function highlightPlayableBoards() {
    if (winners.length ) {
        console.log('in winners length if')
        for (let i = 0; i < boards.length; i++) {
            if (!checkBoard(boards[i].id)) {
                document.getElementById(boards[i].id).classList.add('highlight');
            }
        }
    }
}

// Highlights the board for the next location.
function nextMoveLocation(nextBoard, currentBoard) {
    // Clear the currently highlighted board
    removeHighlight();

    // Add highlight class to the board that was selected
    switch(nextBoard) {
        case 'space a1':
            if(!checkBoard(currentBoard)) {
                document.getElementById('board1').classList.add('highlight');
            } else {
                highlightPlayableBoards();
            }
            break;
        case 'space a2':
            if(!checkBoard(currentBoard)) {
                document.getElementById('board4').classList.add('highlight');
            } else {
                highlightPlayableBoards();
            }
            break;
        case 'space a3':
            if(!checkBoard(currentBoard)) {
                document.getElementById('board7').classList.add('highlight');
            } else {
                highlightPlayableBoards();
            }    
            break;
        case 'space b1':
            // if(checkBoard(currentBoard)) {
                document.getElementById('board2').classList.add('highlight');
            // } else {
            //     highlightPlayableBoards();
            // }
            break;
        case 'space b2':
            // if(checkBoard(currentBoard)) {
                document.getElementById('board5').classList.add('highlight');
            // } else {
            //     highlightPlayableBoards();
            // }
            break;
        case 'space b3':
            // if(checkBoard(currentBoard)) {
                document.getElementById('board8').classList.add('highlight');
            // } else {
            //     highlightPlayableBoards();
            // }
            break;
        case 'space c1':
            // if(checkBoard(currentBoard)) {
                document.getElementById('board3').classList.add('highlight');
            // } else {
            //     highlightPlayableBoards();
            // }
            break;
        case 'space c2':
            // if(checkBoard(currentBoard)) {
                document.getElementById('board6').classList.add('highlight');
            // } else {
            //     highlightPlayableBoards();
            // }
            break;
        case 'space c3':
            // if(checkBoard(currentBoard)) {
                document.getElementById('board9').classList.add('highlight');
            // } else {
            //     highlightPlayableBoards();
            // }
            break;
        default:
            // do nothing do we need default then?
            break;
    }


}


for (var i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', Move);
}


