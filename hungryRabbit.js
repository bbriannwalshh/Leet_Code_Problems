// You are given a 2D grid, with each position denoted by a number representing 
// carrots. A rabbit is placed in the center of the grid--if the grid does not 
// provide a middle, the position is chosen based on what location has the most 
// carrots between the handful of equally center positions. 
// the rabbit will eat the carrots at that square, and then is able to move one
// position vertically or horizontally to the square that holds the most carrots.
// the rabbit will follow this until he is directly surrounded by positions all 
// containing zero carrots. The number of carrots consumed should be returned.


const hungryRabbit = function (grid, pos = [], eaten = 0) {
  if (!pos.length) {
    pos = startingPosition(grid);
  }

  let row = pos[0];
  let col = pos[1];

  eaten += grid[row][col];
  grid[row][col] = 0;

  let next = [row, col];


  if (grid[row + 1] && grid[row + 1][col] && grid[row + 1][col] > grid[next[0]][next[1]]) {
    next = [row + 1, col];
  }

  if (grid[row - 1] && grid[row - 1][col] && grid[row - 1][col] > grid[next[0]][next[1]]) {
    next = [row - 1, col];
  }

  if (grid[row][col - 1] && grid[row][col - 1] > grid[next[0]][next[1]]) {
    next = [row, col - 1];
  }

  if (grid[row][col + 1] && grid[row][col + 1] > grid[next[0]][next[1]]) {
    next = [row, col + 1];
  }


  if (grid[next[0]][next[1]] === 0) {
    return eaten;
  } else {
    return hungryRabbit(grid, next, eaten);
  }
};



const startingPosition = function (grid) {
  let options = [];
  if (grid.length % 2 === 0) {
    let rows = [grid.length / 2, (grid.length / 2) - 1];

    if (grid[0].length % 2 === 0) {
      let cols = [grid[0].length / 2, (grid[0].length / 2) - 1];

      for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cols.length; j++) {
          options.push([rows[i], cols[j]]);
        }
      }

    } else {
      for (let i = 0; i < rows.length; i++) {
        options.push([row[i], Math.floor(grid[0].length / 2)]);
      }
    }
  } else {
    let row = Math.floor(grid.length / 2);

    if (grid[row].length % 2 === 0) {
      let cols = [grid[row].length / 2, (grid[row].length / 2) - 1];

      for (let i = 0; i < col.length; i++) {
        options.push(row, cols[i]);
      }

    } else {
      options.push([row, Math.floor(grid[0].length / 2)]);
    }
  }

  let pos = options[0];

  for (let i = 1; i < options.length; i++) {
    let row = options[i][0];
    let col = options[i][1];

    if (grid[row][col] > grid[pos[0]][pos[1]]) {
      pos = options[i];
    }
  }

  return pos;
};





console.log(hungryRabbit(
  [[5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]]));


