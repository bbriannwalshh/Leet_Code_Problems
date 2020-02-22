// Plain English Description w / JavaScript Solution:

// Effectively, what the solution above is describing is the creation of a matrix 
// / table that has inputs for all preceding inputs.One crucial step here is that 
// the "base case" starts off with the empty String.

// IE: When comparing "" vs "kitten", we have 6 changes, because we need to insert 
// every character of kitten.So, 1 for "" vs "k", 2 for "" vs "ki", etc. We do the 
// same thing by comparing the empty string to "sitting".

// Let's start by iterating over our Strings, i for word1, and j for word2, and 
// comparing each string to ' '. Our initial table should look like.

// ? |' '| k | i | t | t | e | n
//' '| 0 | 1 | 2 | 3 | 4 | 5 | 6
// s | 1
// i | 2
// t | 3
// t | 4
// i | 5
// n | 6
// g | 7

// Great! We have the foundation to build our solution.So comparing "k" to "s", we first want to check what the minimum solution of the previous strings were(' ' vs ' ', ' ' vs 'k', ' ' vs 's').We see that the minimum prior solution is in the diagonal of our table.So, we retrieve this value(table[i - 1][j - 1] which is currently 0) and use it.But since k does not equal s, we add 1, IE, our first step in comparing k vs s should look like:

// ? |' '| k | i | t | t | e | n
//' '| 0 | 1 | 2 | 3 | 4 | 5 | 6
// s | 1 | 1 |
// i | 2
// t | 3
// t | 4
// i | 5
// n | 6
// g | 7

// We can follow this same logic moving forward, comparing the previous solutions(left, diagonal, top with respect to table cells) and adding 1. I've filled in the table up to where we encounter "ki" vs "si". This is where we have to apply a slight modification.

// ? |' '| k | i | t | t | e | n
//' '| 0 | 1 | 2 | 3 | 4 | 5 | 6
// s | 1 | 1 | 2 | 3 | 4 | 5 | 6
// i | 2 | 1 |
// t | 3
// t | 4
// i | 5
// n | 6
// g | 7

// Because the ith and jth character match one another, we simply use the diagonal value as there are no new changes required.IE: "ki" vs "si" has the same solution as "k" vs "s" since the "i" is the same.

// ? |' '| k | i | t | t | e | n
//' '| 0 | 1 | 2 | 3 | 4 | 5 | 6
// s | 1 | 1 | 2 | 3 | 4 | 5 | 6
// i | 2 | 1 | 1
// t | 3
// t | 4
// i | 5
// n | 6
// g | 7

// We can continue with this logic filling in our table, and at the end our answer will be in the last diagonal cell! Here is the code:

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dist = [[]];

  // we've added plus one to account for the empty string
  for (let i = 0; i <= word1.length; i++) {
    if (!dist[i]) { // because initializing empty Arrays with current sizes in JavaScript is weird
      dist[i] = [];
    }

    for (let j = 0; j <= word2.length; j++) {
      if (i === 0) {
        // i is the empty string, so 1 insert per char of j
        dist[i][j] = j;
      } else if (j === 0) {
        // j is the empty string, so 1 insert per char of i
        dist[i][j] = i;
      } else if (word1[i - 1] === word2[j - 1]) {
        // the last character matches, so use the diagonal
        // this is because the no changes required from previous
        dist[i][j] = dist[i - 1][j - 1];
      } else {
        dist[i][j] = Math.min(1 + Math.min(
          dist[i - 1][j],
          dist[i][j - 1],
          dist[i - 1][j - 1]
        ));
      }
    }
  }

  return dist[word1.length][word2.length];
};