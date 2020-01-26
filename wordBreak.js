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


// Correct answer, but "Time Limit Exceeded" given extreme examples

var wordBreak = function (s, wordDict) {
  if (s.length === 0) return true;
  let sub = "";

  for (let i = 0; i < s.length; i++) {
    sub = sub.concat(s[i]);

    if (wordDict.includes(sub)) {
      if (wordBreak(s.slice(i + 1), wordDict)) {
        return true;
      }
    }
  }

  return false;
};