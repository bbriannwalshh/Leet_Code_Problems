/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let newBoard = new Array(board.length).fill(false);

  newBoard.forEach((ele, idx) => newBoard[idx] = []);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {

      let pos1 = (board[i - 1]
        && Number.isInteger(board[i - 1][j - 1])
        && board[i - 1][j - 1] === 1) ?
        board[i - 1][j - 1] : 0;

      let pos2 = (board[i - 1]
        && Number.isInteger(board[i - 1][j])
        && board[i - 1][j] === 1) ?
        board[i - 1][j] : 0;

      let pos3 = (board[i - 1]
        && Number.isInteger(board[i - 1][j + 1])
        && board[i - 1][j + 1] === 1) ?
        board[i - 1][j + 1] : 0;

      let pos4 = (board[i]
        && Number.isInteger(board[i][j - 1])
        && board[i][j - 1] === 1) ?
        board[i][j - 1] : 0;

      let pos5 = (board[i]
        && Number.isInteger(board[i][j + 1])
        && board[i][j + 1] === 1) ?
        board[i][j + 1] : 0;

      let pos6 = (board[i + 1]
        && Number.isInteger(board[i + 1][j - 1])
        && board[i + 1][j - 1] === 1) ?
        board[i + 1][j - 1] : 0;

      let pos7 = (board[i + 1]
        && Number.isInteger(board[i + 1][j])
        && board[i + 1][j] === 1) ?
        board[i + 1][j] : 0;

      let pos8 = (board[i + 1]
        && Number.isInteger(board[i + 1][j + 1])
        && board[i + 1][j + 1] === 1) ?
        board[i + 1][j + 1] : 0;

      let sum = pos1 + pos2 + pos3 + pos4 + pos5 + pos6 + pos7 + pos8;


      if (sum < 2 || sum > 3) {
        newBoard[i].push(0);
      } else if (sum === 2) {
        newBoard[i].push(board[i][j]);
      } else if (sum === 3) {
        newBoard[i].push(1);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = newBoard[i][j];
    }
  }

  return board;
};