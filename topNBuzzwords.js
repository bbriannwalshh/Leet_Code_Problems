// You work on a team whose job is to understand the most sought after toys for 
// the holiday season. A teammate of yours has built a webcrawler that extracts 
// a list of quotes about toys from different articles.You need to take these 
// quotes and identify which toys are mentioned most frequently. Write an algorithm 
// that identifies the top N toys out of a list of quotes and list of toys.

// Your algorithm should output the top N toys mentioned most frequently in the quotes.

// Input:
// The input to the function/method consists of five arguments:

// numToys,   an integer representing the number of toys
// topToys,   an integer representing the number of top toys your algorithm needs 
//            to return;
// toys,      a list of strings representing the toys,
// numQuotes, an integer representing the number of quotes about toys;
// quotes,    a list of strings that consists of space - sperated words representing 
//            articles about toys

// Output:
// Return a list of strings of the most popular N toys in order of most to least 
// frequently mentioned

// Note:
// The comparison of strings is case -insensitive.If the value of topToys is more 
// than the number of toys, return the names of only the toys mentioned in the quotes.
// If toys are mentioned an equal number of times in quotes, sort alphabetically.


// .replace(/[\[\]\*!@#$%^&().,-_+=]/g, "");

function topNBuzzwords(numToys, topToys, toys, numQuotes, quotes) {
  let counter = {};

  for (let i = 0; i < numQuotes; i++) {
    let quote = quotes[i];

    for (let j = 0; j < quote.length; j++) {
      let char = quote[j];

      for (let k = 0; k < numToys; k++) {
        let toy = toys[k];
        if (char.toLowerCase() === toy[0].toLowerCase()) {

          let tempToy = toys[k].toLowerCase();
          let subQuote = quote.slice(j, j + tempToy.length);
          subQuote = subQuote.toLowerCase();

          if (tempToy === subQuote) {
            if (counter[tempToy]) {
              counter[tempToy] += 1;
            } else {
              counter[tempToy] = 1;
            }
          }
        }
      }
    }
  }

  let topReturn = [];
  let keys = Object.keys(counter);
  let vals = Object.values(counter);
  keys = keys.sort();
  vals = vals.sort();
  
  for (let i = 0; i < topToys; i++) {
    let count = vals[vals.length - 1];

    for (let j = 0; j < keys.length; j++) {
      let key = keys[j];

      if (counter[key] === count && !topReturn.includes(key)) {
        topReturn.push(key);
        vals.pop();
        break;
      }
    }
  }

  return topReturn;
}

let numToys = 6;
let topToys = 2;
let toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"];
let numQuotes = 6;
let quotes = [
  "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
  "The new Elmo dolls are super high quality",
  "Expect the Elsa dolls to be very popular this year, Elsa!",
  "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
  "For parents of older kids, look into buying them a drone",
  "Warcraft is slowly rising in popularity ahead of the holiday season"
];

console.log(topNBuzzwords(numToys, topToys, toys, numQuotes, quotes));