// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false

const isValid = function (s) {
  let options = ["()", "[]", "{}"];
  let finished = false;

  while (!finished) {
    finished = true;
    for (let i = 0; i < options.length; i++) {
      let temp = options[i];

      if (s.includes(temp)) {
        finished = false;
        s = s.split(temp);
        s = s.join("");
      }
    }
  }

  if (s.length) {
    return false;
  } else {
    return true;
  }
};