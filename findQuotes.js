// Given a string, return an array of the specifically quoted sections
// EX: str = "James said 'hello' but i responded with 'no', because I didn't want to talk to him."
// return = ['hello', 'no'];

function subQuotes(str) {
  let subStrings = [];
  let sub = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '"' || str[i] === "'") {
      if (str[i - 1] === " ") {
        sub = str[i + 1];
        i++;
      } else if (str[i + 1] === " " || str[i + 1] === ",") {
        if (sub) {
          subStrings.push(sub);
          sub = false;
        }
      }
    } else {
      if (sub) {
        sub = sub.concat(str[i]);
      }
    }
  }

  return subStrings;
}

let str = "James said 'hello' but i responded with 'no', because I didn't want to talk to him.";

console.log(subQuotes(str));