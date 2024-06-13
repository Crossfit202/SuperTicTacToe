var lastMove = 'Blank';



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
            console.log(p1);
            console.log(p2);
        } else {
            div.textContent = 'X';
            div.classList.add('X')
            lastMove = 'X';

        }
    }
}

// Highlights the board for the next location.
function nextMoveLocation() {
    var board = document.getElementsByClassName('board3')
    board.classList.add('highlight');


}

var singleBoards = document.getElementsByClassName('single_board');

for (var i = 0; i < singleBoards.length; i++) {
    singleBoards[i].addEventListener('click', Move);
}