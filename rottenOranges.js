// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent(4 - directionally) to a 
// rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a 
// fresh orange.If this is impossible, return -1 instead.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let allRotten = false;
  let visited = [];
  let minutes = 0;

  while (!allRotten) {
    allRotten = true;
    let positions = [];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        let pos = [i, j];
        let spot = grid[i][j];

        if (spot === 2 & !visited.includes(`${pos}`)) {
          visited.push(`${pos}`);
          positions.push(pos);
        }
      }
    }

    for (let k = 0; k < positions.length; k++) {
      let pos = positions[k];
      let rotten = rotOJ(pos, grid);
      if (rotten) allRotten = false;
    }

    if (!allRotten) minutes += 1;
  }


  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }

  return minutes;
};





const rotOJ = function (pos, grid) {
  let row = pos[0];
  let col = pos[1];
  let submit = false;

  if (grid[row + 1] && grid[row + 1][col] === 1) {
    grid[row + 1][col] = 2;
    submit = true;
  }
  if (grid[row - 1] && grid[row - 1][col] === 1) {
    grid[row - 1][col] = 2;
    submit = true;
  }
  if (grid[row][col + 1] && grid[row][col + 1] === 1) {
    grid[row][col + 1] = 2;
    submit = true;
  }
  if (grid[row][col - 1] && grid[row][col - 1] === 1) {
    grid[row][col - 1] = 2;
    submit = true;
  }

  return submit;
};