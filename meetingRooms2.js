// Given an array of meeting time intervals consisting of start and end times
// [[s1, e1], [s2, e2],...](si < ei), find the minimum number of conference rooms required.

//   Example 1:

// Input: [[0, 30], [5, 10], [15, 20]]
// Output: 2
// Example 2:

// Input: [[7, 10], [2, 4]]
// Output: 1

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (!intervals.length) return 0;
  let rooms = [[intervals[0]]];

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    let pushed = false;

    for (let j = 0; j < rooms.length; j++) {
      let room = rooms[j];
      let working = true;

      for (let k = 0; k < room.length; k++) {
        let tempInterval = room[k];

        let intStart = interval[0];
        let intEnd = interval[1];

        let tempStart = tempInterval[0];
        let tempEnd = tempInterval[1];

        if (intStart <= tempStart && intEnd > tempStart) {
          working = false;
          break;
        } else if (intStart >= tempStart && intStart < tempEnd) {
          working = false;
          break;
        }
      }

      if (working) {
        room.push(interval);
        pushed = true;
        break;
      }
    }

    if (!pushed) {
      rooms.push([interval]);
    }
  }

  return rooms.length;
};