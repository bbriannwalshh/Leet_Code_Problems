/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let sides = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let cube = grid[i][j];

      if (cube === 1) {
        grid[i - 1] &&
          grid[i - 1][j] &&
          grid[i - 1][j] === 1 ? null : sides++;

        grid[i + 1] &&
          grid[i + 1][j] &&
          grid[i + 1][j] === 1 ? null : sides++;

        grid[i][j - 1] &&
          grid[i][j - 1] === 1 ? null : sides++;

        grid[i][j + 1] &&
          grid[i][j + 1] === 1 ? null : sides++;
      }
    }
  }

  return sides;
};