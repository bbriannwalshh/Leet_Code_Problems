/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {

      if (i === 0) {
        if (!validCol([i, j], board)) return false;
      }

      if (j === 0) {
        if (!validRow([i, j], board)) return false;
      }

      if (i % 3 === 0 && j % 3 === 0) {
        if (!validCube([i, j], board)) return false;
      }
    }
  }

  return true;
};

const validCube = function (pos, board) {
  let row = pos[0];
  let col = pos[1];
  let options = {};

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let currentRow = row + i;
      let currentCol = col + j;
      let value = board[currentRow][currentCol];

      if (value !== '.') {
        if (options[value]) {
          return false;
        } else {
          options[value] = true;
        }
      }
    }
  }

  return true;
};

const validRow = function (pos, board) {
  let row = pos[0];
  let col = pos[1];
  let options = {};

  for (let i = 0; i < board.length; i++) {
    let currentCol = col + i;
    let value = board[row][currentCol];

    if (value !== '.') {
      if (options[value]) {
        return false;
      } else {
        options[value] = true;
      }
    }
  }

  return true;
};

const validCol = function (pos, board) {
  let row = pos[0];
  let col = pos[1];
  let options = {};

  for (let i = 0; i < board[row].length; i++) {
    let currentRow = row + i;
    let value = board[currentRow][col];

    if (value !== '.') {
      if (options[value]) {
        return false;
      } else {
        options[value] = true;
      }
    }
  }

  return true;
};


console.log(isValidSudoku(
  [[".", ".", ".", ".", "5", ".", ".", "1", "."], 
   [".", "4", ".", "3", ".", ".", ".", ".", "."], 
   [".", ".", ".", ".", ".", "3", ".", ".", "1"], 
   ["8", ".", ".", ".", ".", ".", ".", "2", "."], 
   [".", ".", "2", ".", "7", ".", ".", ".", "."], 
   [".", "1", "5", ".", ".", ".", ".", ".", "."], 
   [".", ".", ".", ".", ".", "2", ".", ".", "."], 
   [".", "2", ".", "9", ".", ".", ".", ".", "."], 
   [".", ".", "4", ".", ".", ".", ".", ".", "."]]));