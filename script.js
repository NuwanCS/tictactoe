const board = document.createElement('div');
const cell = document.createElement('div');
const cell_x = document.createElement('div');
const cell_o = document.createElement('div');

board.id = 'board';
board.className = 'board circle';


cell.className = 'cell';

// cell_x.className = 'cell x';
// cell_o.className = 'cell circle';

document.body.appendChild(board);



for(let i =0; i<9; i++) {
    
    const newCell = cell.cloneNode();
    newCell.id = `${i}`;
    board.appendChild(newCell);
}


const allCells = document.querySelectorAll('.cell')

let isMarkO=true;

const winningPatterns = [
    // Rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // Columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // Diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

const finalBoard = [[],[],[]];

const handleCellClick = (e) => {
    const idValue= parseInt(e.target.attributes.id.value);
    
    
    if (isMarkO) {
        // e.target.attributes.id.value += '+o'
        if(finalBoard[0].length === 3 && finalBoard[1].length === 3 && finalBoard[2].length === 3) console.log('hello')
        e.target.classList.value = 'cell circle';
        isMarkO = false
        board.className = 'board x';   

        if (idValue < 3) finalBoard[0][idValue] = '0';
        if (idValue >= 3 && idValue < 6) finalBoard[1][idValue - 3] = '0';
        if (idValue >= 6 && idValue < 9) finalBoard[2][idValue - 6] = '0';
        console.log(finalBoard[0], finalBoard[1], finalBoard[2])
        return;
    }
    // e.target.attributes.id.value += '+x' 
    e.target.classList.value = 'cell x'
    isMarkO = true
    board.className = 'board circle';
    if (idValue < 3) finalBoard[0][idValue] = 'X';
    if (idValue >= 3 && idValue < 6) finalBoard[1][idValue - 3] = 'X';
    if (idValue >= 6 && idValue < 9) finalBoard[2][idValue - 6] = 'X';

    console.log(finalBoard[0], finalBoard[1], finalBoard[2])
    if(finalBoard[0].length === 3 && finalBoard[1].length === 3 && finalBoard[2].length === 3) console.log('hello')
}



for(let cell of allCells){
    cell.addEventListener('click', handleCellClick, {once: true})
}
