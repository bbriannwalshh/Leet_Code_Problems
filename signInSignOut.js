function processLogs(logs, maxSpan) {
  let timeCounter = {};
  let results = [];

  for (let i = 0; i < logs.length; i++) {
    let log = logs[i].split(" ");
    let id = Number(log[0]);
    let time = Number(log[1]);
    if (timeCounter[id]) {
      let currTime = timeCounter[id];
      let diff;
      if (currTime >= time) {
        diff = currTime - time;
      } else {
        diff = time - currTime;
      }

      if (diff <= maxSpan) {
        results.push(id);
        if (results.length >= 2) {
          let x = results.length - 1;
          let y = results.length - 2;
          let sorted = false;
          while (!sorted) {
            if (results[x] && results[y] && results[x] < results[y]) {
              [results[x], results[y]] = [results[y], results[x]];
              x -= 1;
              y -= 1;
            } else {
              sorted = true;
            }
          }
        }
      }
    } else {
      timeCounter[id] = time;
    }
  }

  return results;
}