/*
 * Complete the 'minTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY boxes as parameter.
 */

function minTime(boxes) {
  console.log(boxes);
  let trips = 0;
  let counter = 0;
  let floors = boxes.length;

  for (let i = 0; i < boxes.length; i++) {
    let floor = boxes[i];
    let currCount = 0;
    let currFloor = floors - i;

    if (trips < floor) {
      trips += floor;
      currCount += (currFloor * floor);
    }
    currCount += floor;
    counter += currCount;
  }

  return counter;


  // let trips = 0;
  // let tripsCompleted = false;
  // // Write your code here

  // while (!tripsCompleted) {
  //     tripsCompleted = true;

  //     for (let i = 0; i < boxes.length; i++) {
  //         if (boxes[i]) {
  //             tripsCompleted = false;
  //             for (let j = i; j < boxes.length; j++) {
  //                 let floor = boxes[j];

  //                 if (floor > 0) {
  //                     boxes[j]--;
  //                     trips++;
  //                 }

  //                 trips++
  //             }
  //             break
  //         }
  //     }
  // }

  // return trips;
}

// minTime([741001301, 233628702, 525152616, 254885282, 429527287]);
// 5889201693
