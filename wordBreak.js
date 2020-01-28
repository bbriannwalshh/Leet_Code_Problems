// Given a non - empty string s and a dictionary wordDict containing a list of 
// non - empty words, determine if s can be segmented into a space - separated 
// sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
//   Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true

// Explanation: Return true because "leetcode" can be segmented as "leet code".

const wordBreak = function (s, wordDict) {
  let table = new Array(s.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i < table.length; i++) {
    if (!table[i]) continue;

    for (let j = 0; j < table.length; j++) {
      let word = s.slice(i, j);

      if (wordDict.includes(word)) {
        table[j] = true;
      }
    }
  }

  return table[table.length - 1];
};


// Correct answer, but "Time Limit Exceeded" given extreme examples

// var wordBreak = function (s, wordDict) {
//   if (s.length === 0) return true;
//   let sub = "";

//   for (let i = 0; i < s.length; i++) {
//     sub = sub.concat(s[i]);

//     if (wordDict.includes(sub)) {
//       if (wordBreak(s.slice(i + 1), wordDict)) {
//         return true;
//       }
//     }
//   }

//   return false;
// };