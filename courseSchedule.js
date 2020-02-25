/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const sortingFunction = function (a, b) {
  if (a[0] === b[0]) {
    return 0;
  }
  else {
    return (a[0] < b[0]) ? -1 : 1;
  }
};


var canFinish = function (numCourses, prerequisites) {
  debugger

  if (!prerequisites.length) return true;
  let object = {};
  let keys = [];

  for (let i = 0; i < prerequisites.length; i++) {
    let course = prerequisites[i];
    let curr = course[0];
    let prereq = course[1];

    if (object[curr]) {
      object[curr].push(prereq);
    } else {
      keys.push(curr);
      object[curr] = [prereq];
    }
  }

  for (let i = 0; i < keys.length; i++) {
    let course = keys[i];
    let prereqs = object[course];
    let courses = dfs(prereqs, object);

    if (courses <= numCourses) {
      return true;
    }
  }

  return false;
};

const dfs = function (prereqs, prerequisites, visited = {}) {
  debugger

  if (!prereqs || !prereqs.length) {
    return 1;
  } else {
    let counter = 0;
    for (let i = 0; i < prereqs.length; i++) {
      if (visited[prereqs[i]]) {
        return false;
      } else {
        visited[prereqs[i]] = true;
        let answer =  dfs([prereqs[i]], prerequisites, visited);
        if (!answer) {
          return false;
        } else {
          counter += answer;
        }
      }
    }

    return counter;
  }
};

let numCourses = 3;
let prerequisites = [[1, 0], [1, 2], [0, 1]];
console.log(canFinish(numCourses, prerequisites));