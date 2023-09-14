const board = document.createElement('div');
const cell = document.createElement('div');
const cell_x = document.createElement('div');
const cell_o = document.createElement('div');

document.body.appendChild(board);

board.id = 'board';
board.className = 'board circle';


cell.className = 'cell';
const startGame = () => {

// cell_x.className = 'cell x';
// cell_o.className = 'cell circle';





for(let i =0; i<9; i++) {
    
    const newCell = cell.cloneNode();
    newCell.id = `${i}`;
    board.appendChild(newCell);
}
}

startGame();

const allCells = document.querySelectorAll('.cell')

let isMarkO=true;

const winningPatterns = [
    // Rows
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8],
    // Columns
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8],
    // Diagonals
    [0, 4, 8], 
    [2, 4, 6]             
];

const finalBoard = Array(9).fill(null);
let isXNext = true;
let winner = null;

const checkWinner = () => {
    for( const pattern of winningPatterns) {
        [x,y,z] = pattern;

        if (finalBoard[x] && finalBoard[x] === finalBoard[y] && finalBoard[x] === finalBoard[z]) {
        
            return winner=finalBoard[x];
        } 

        if (finalBoard.every(cell => cell)) {
            return winner = 'Draw';
        }
    }
}

const handleCellClick = (e) => {
    const cell = e.target;
    const cellIndex = cell.id;

    if(!winner) {
        finalBoard[cellIndex] = !isXNext ? 'X' : 'O'
        board.className = isXNext ? 'board x' : 'board circle'
        cell.classList.add(!isXNext ? 'x' : 'circle')
        isXNext = !isXNext;

        const wonby = checkWinner();

        if (winner) {
            winner = 'Draw' ? window.alert(`It's a draw`) :window.alert(`${wonby} won`);
            startGame();
        }
    }
}



for(let cell of allCells){
    cell.addEventListener('click', handleCellClick, {once: true})
}
