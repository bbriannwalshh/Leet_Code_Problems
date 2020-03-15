/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc];

  if (oldColor === newColor) return image;

  dfs(image, [sr, sc], oldColor, newColor);

  return image;
};

var dfs = function (image, pos, oldColor, newColor) {
  let row = pos[0];
  let col = pos[1];

  if (!image[row] ||
    !Number.isInteger(image[row][col]) ||
    image[row][col] !== oldColor
  ) {

    return false;
  }

  image[row][col] = newColor;

  dfs(image, [row + 1, col], oldColor, newColor);
  dfs(image, [row - 1, col], oldColor, newColor);
  dfs(image, [row, col + 1], oldColor, newColor);
  dfs(image, [row, col - 1], oldColor, newColor);
}