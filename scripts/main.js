var lastMove = 'Blank';

function Move() {
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
}

function nextMoveLocation() {
    var board = document.getElementsByClassName('board3')
    board.classList.add('highlight');


}

var singleBoards = document.getElementsByClassName('single_board');

for (var i = 0; i < singleBoards.length; i++) {
    singleBoards[i].addEventListener('click', Move, nextMoveLocation);
}