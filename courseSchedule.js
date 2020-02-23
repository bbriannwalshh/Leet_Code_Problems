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
}


var canFinish = function (numCourses, prerequisites) {
  if (!prerequisites.length) return true;
  let sorted = prerequisites.sort(sortingFunction);
  let object = {};

  for (let i = 0; i < sorted.length; i++) {
    let course = sorted[i];
    let curr = course[0];
    let prereq = course[0];

    object[curr] = prereq;
  }

  for (let i = 0; i < sorted.length; i++) {
    let course = sorted[i];
    let curr = course[0];
    let prereq = course[1];

    if (dfs(prereq, object, numCourses - 1)) {
      return true;
    }
  }
};

const dfs = function (prereq, prerequisites, numCourses) {
  if (numCourses === 0) return false;
  let currCourses = numCourses - 1;

  let newPreRec = prerequisites[prereq];

  if (!newPreRec) {
    return true;
  } else {
    dfs(newPreRec, prerequisites, currCourses);
  }

};


let numCourses = 2;
let prerequisites = [[0, 1], [1, 0]];
console.log(canFinish(numCourses, prerequisites));