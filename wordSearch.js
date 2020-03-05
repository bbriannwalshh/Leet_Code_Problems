/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let wordArr = word.split("");

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0]) {

        if (dfs(board, [i, j], wordArr)) {
          return true;
        }
      }
    }
  }

  return false;
};

const dfs = function (board, pos, word) {
  if (!word.length) return true;
  let [row, col] = pos;

  if (!board[row] || !board[row][col] || board[row][col] !== word[0]) {
    return false;
  }

  board[row][col] = false;
  let temp = word.shift();

  let down = dfs(board, [row + 1, col], word);
  let up = dfs(board, [row - 1, col], word);
  let left = dfs(board, [row, col - 1], word);
  let right = dfs(board, [row, col + 1], word);

  if (down || up || left || right) {
    return true;
  } else {
    board[row][col] = temp;
    word.unshift(temp);
  }
};





