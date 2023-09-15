let isMarkO = true;

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
  [2, 4, 6],
];

const finalBoard = Array(9).fill(null);
let isXNext = true;
let winner = null;

const checkWinner = () => {
  for (const pattern of winningPatterns) {
    [x, y, z] = pattern;

    if (
      finalBoard[x] &&
      finalBoard[x] === finalBoard[y] &&
      finalBoard[x] === finalBoard[z]
    ) {
      return (winner = finalBoard[x]);
    }

    if (finalBoard.every((cell) => cell !== null)) {
      return (winner = "Draw");
    }
  }
};

const handleCellClick = (e) => {
  
  const cell = e.target;
  const cellIndex = cell.id;

  if (!winner) {
    finalBoard[cellIndex] = !isXNext ? "X" : "O";
    board.className = isXNext ? "board x" : "board circle";
    cell.classList.add(!isXNext ? "x" : "circle");
    isXNext = !isXNext;

    const wonby = checkWinner();

    if (winner) {
      winner === "Draw"
        ? window.alert(`It's a draw`)
        : window.alert(`${wonby} won`);
        location.reload()
    }
  }
};

const board = document.createElement("div");
const cell = document.createElement("div");

const startGame = () => {
    document.body.appendChild(board);
    
    board.id = "board";
    board.className = "board circle";
    
    cell.className = "cell";
    for (let i = 0; i < 9; i++) {
        console.log(i);
        const newCell = cell.cloneNode();
        newCell.id = `${i}`;
        board.appendChild(newCell);
    }
    const allCells = document.querySelectorAll(".cell");

  for (let cell of allCells) {
    console.log(cell);
    cell.addEventListener("click", handleCellClick, { once: true });
  }
};

startGame();
