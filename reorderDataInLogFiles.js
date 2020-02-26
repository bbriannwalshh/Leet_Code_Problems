/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let letterLogs = [];
  let digitLogs = [];
  let numeric = "0123456789";

  for (let i = 0; i < logs.length; i++) {
    let log = logs[i];
    let split = log.split(" ");
    let ele = split[1];

    if (numeric.includes(ele[0])) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  }

  let logValues = [];

  letterLogs.forEach(log => {
    log = log.split(" ");
    log.shift();
    if (log.length) log = log.join(" ");
    logValues.push(log);
  });

  logValues = logValues.sort();

  let sortedLogs = sortOriginalLogs(letterLogs, logValues);

  return sortedLogs.concat(digitLogs);
};

const sortOriginalLogs = function (fullLogs, partLogs) {
  let sortedLogs = [];

  for (let i = 0; i < partLogs.length; i++) {
    let partLog = partLogs[i];

    for (let j = 0; j < fullLogs.length; j++) {
      let full = fullLogs[j];
      if (full && full.includes(partLog)) {
        sortedLogs.push(full);
        fullLogs[j] = null;
      }
    }
  }

  return sortedLogs;
};