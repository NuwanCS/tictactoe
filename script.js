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

let previousMark=true;

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

const handleCellClick = (e) => {
    // console.log('clicked',e);
    if (previousMark) {
        e.target.attributes.id.value += '+o'
        e.target.classList.value = 'cell circle';
        previousMark = false
        board.className = 'board x';   
        console.log('x--', e.target.attributes.id);
        return;
    }
    e.target.attributes.id.value += '+x' 
    e.target.classList.value = 'cell x'
    previousMark = true
    board.className = 'board circle';
    console.log('0--', e.target.attributes.id);
}




for(let cell of allCells){
    cell.addEventListener('click', handleCellClick, {once: true})
}
