/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let start = asteroids.shift();
  let stack = [start];
  let throughStack = false;

  while (asteroids.length || throughStack) {
    let newAsteroid;

    if (throughStack) {
      newAsteroid = stack.pop();
    } else {
      newAsteroid = asteroids.shift();
    }

    let previous = stack.pop();
    if (!previous) {
      stack.push(newAsteroid);
      continue;
    }

    if (previous > 0 && newAsteroid < 0) {
      if (Math.abs(previous) === Math.abs(newAsteroid)) {
        throughStack = false;
        continue;
      } else if (Math.abs(previous) < Math.abs(newAsteroid)) {
        stack.push(newAsteroid);
        if (stack.length < 2) {
          throughStack = false;
        } else {
          throughStack = true;
        }
      } else {
        stack.push(previous);
        throughStack = false;
      }

    } else {
      stack.push(previous);
      stack.push(newAsteroid);
      throughStack = false;
    }
  }

  return stack;
};