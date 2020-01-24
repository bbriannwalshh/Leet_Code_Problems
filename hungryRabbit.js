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

  eaten += grid[pos[0]][pos[1]];
  grid[pos[0]][pos[1]] = 0;

  let next = [pos[0], pos[1]];


  if (grid[pos[0] + 1] && grid[pos[0] + 1][pos[1]] && grid[pos[0] + 1][pos[1]] > grid[next[0]][next[1]]) {
    next = [pos[0] + 1, pos[1] + 1];
  }

  if (grid[pos[0] - 1] && grid[pos[0] - 1][pos[1]] && grid[pos[0] - 1][pos[1]] > grid[next[0]][next[1]]) {
    next = [pos[0] - 1, pos[1]];
  }

  if (grid[pos[0]][pos[1] - 1] && grid[pos[0]][pos[1] - 1] > grid[next[0]][next[1]]) {
    next = [pos[0], pos[1] - 1];
  }

  if (grid[pos[0]][pos[1] + 1] && grid[pos[0]][pos[1] + 1] > grid[next[0]][next[1]]) {
    next = [pos[0], pos[1] - 1];
  }


  if (grid[next[0]][next[1]] === 0) {
    return eaten;
  } else {
    return hungryRabbit(grid, next, eaten);
  }
};



const startingPosition = function(grid) {
  let options = [];
  if (grid.length % 2 === 0) {
    let y = [grid.length / 2, (grid.length / 2) - 1];

    if (grid[0].length % 2 === 0) {
      let x = [grid[0].length / 2, (grid[0].length / 2) - 1];

      for (let i = 0; i < y.length; i++) {
        for (let j = 0; j < x.length; j++) {
          options.push([y[i], x[j]]);
        }
      }

    } else {
      for (let i = 0; i < y.length; i++) {
        options.push([y[i], Math.floor(grid[0].length / 2)]);
      }
    }
  } else {
    let y = Math.floor(grid.length / 2);

    if (grid[y].length % 2 === 0) {
      let x = [grid[y].length / 2, (grid[y].length / 2) - 1];

      for (let i = 0; i < x.length; i++) {
        options.push(y, x[i]);
      }

    } else {
      options.push([y, Math.floor(grid[0].length / 2)]);
    }
  }

  pos = options[0];

  for (let i = 1; i < options.length; i++) {
    let x = options[i][1];
    let y = options[i][0];

    if (grid[y][x] > grid[pos[0]][pos[1]]) {
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


