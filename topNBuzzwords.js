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

// function topNBuzzwords(numToys, topToys, toys, numQuotes, quotes) {
//   let counter = {};

//   for (let i = 0; i < numQuotes; i++) {
//     let quote = quotes[i];

//     for (let j = 0; j < quote.length; j++) {
//       let char = quote[j];

//       for (let k = 0; k < numToys; k++) {
//         let toy = toys[k];
//         if (char.toLowerCase() === toy[0].toLowerCase()) {

//           let tempToy = toys[k].toLowerCase();
//           let subQuote = quote.slice(j, j + tempToy.length);
//           subQuote = subQuote.toLowerCase();

//           if (tempToy === subQuote) {
//             if (counter[tempToy]) {
//               counter[tempToy] += 1;
//             } else {
//               counter[tempToy] = 1;
//             }
//           }
//         }
//       }
//     }
//   }

//   let topReturn = [];
//   let keys = Object.keys(counter);
//   let vals = Object.values(counter);
//   keys = keys.sort();
//   vals = vals.sort();
  
//   for (let i = 0; i < topToys; i++) {
//     let count = vals[vals.length - 1];

//     for (let j = 0; j < keys.length; j++) {
//       let key = keys[j];

//       if (counter[key] === count && !topReturn.includes(key)) {
//         topReturn.push(key);
//         vals.pop();
//         break;
//       }
//     }
//   }

//   return topReturn;
// }

// let numToys = 6;
// let topToys = 2;
// let toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"];
// let numQuotes = 6;
// let quotes = [
//   "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
//   "The new Elmo dolls are super high quality",
//   "Expect the Elsa dolls to be very popular this year, Elsa!",
//   "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
//   "For parents of older kids, look into buying them a drone",
//   "Warcraft is slowly rising in popularity ahead of the holiday season"
// ];

// console.log(topNBuzzwords(numToys, topToys, toys, numQuotes, quotes));







// You work on a team whose job is to understand the most sought after toys for the holiday season.A teammate of yours has built a webcrawler that extracts a list of quotes about toys from different articles.You need to take these quotes and identify which toys are mentioned most frequently.Write an algorithm that identifies the top N toys out of a list of quotes and list of toys.

// Your algorithm should output the top N toys mentioned most frequently in the quotes.

//   Input:
// The input to the function/method consists of five arguments:

// numToys, an integer representing the number of toys
// topToys, an integer representing the number of top toys your algorithm needs to return;
// toys, a list of strings representing the toys,
//   numQuotes, an integer representing the number of quotes about toys;
// quotes, a list of strings that consists of space - sperated words representing articles about toys

// Output:
// Return a list of strings of the most popular N toys in order of most to least frequently mentioned

// Note:
// The comparison of strings is case -insensitive.If the value of topToys is more than the number of toys, return the names of only the toys mentioned in the quotes.If toys are mentioned an equal number of times in quotes, sort alphabetically.

//   Example 1:

// Input:
// let numToys = 6,
// topToys = 2,
// toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"],
// numQuotes = 6,
// quotes = [
//   "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
//   "The new Elmo dolls are super high quality",
//   "Expect the Elsa dolls to be very popular this year, Elsa!",
//   "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
//   "For parents of older kids, look into buying them a drone",
//   "Warcraft is slowly rising in popularity ahead of the holiday season"
// ];

// Output:
// ["elmo", "elsa"]

// Explanation:
// elmo - 4
// elsa - 4
// "elmo" should be placed before "elsa" in the result because "elmo" appears in 3 different quotes and "elsa" appears in 2 different quotes.

class Heap {
  constructor(func) {
    this.store = [];
    // func - formula to determine what conditions to consider when comparing two values
    this.func = func;
  }

  peek() {
    // return the max value without popping off.
    return this.store[0];
  }

  size() {
    return this.store.length;
  }

  push(value) {
    // 
    this.store.push(value);
    this.heapifyUp(this.store.length - 1);
  }

  getMax() {
    // if the store is 1 or less in length we can just pop it off the store
    if (this.store.length <= 1) return this.store.pop();
    // else we store the first value(max) return it 
    const result = this.store[0];
    // then heapify the last value in accordance with a heap structure
    this.store[0] = this.store.pop();
    this.heapifyDown(0);
    return result;
  }

  heapifyUp(child) {
    // retrieve parent of child
    const parent = Math.floor((child - 1) / 2);

    // if the comparison results in child being greater (or w/e func) then swap 
    if (child && this.func(this.store[child], this.store[parent])) {
      [this.store[child], this.store[parent]] =
        [this.store[parent], this.store[child]];
      this.heapifyUp(parent);
    }
  }

  heapifyDown(parent) {
    // retrieve children of parent and store in childs array
    const childs = [1, 2].map((n) => parent * 2 + n)
      .filter((n) => n < this.store.length);

    // set initial child to left child
    let child = childs[0];

    // IF the function results in true then set child to compare to parent 
    // as childs[1]
    if (childs[1] && this.func(this.store[childs[1]], this.store[child])) {
      child = childs[1];
    }

    // IF the child is greater(or lesser depending on func)
    // than the parent, we want to swap the two and call heapifyDown 
    // again to track that node as it bubbles up
    if (child && this.func(this.store[child], this.store[parent])) {
      [this.store[child], this.store[parent]] =
        [this.store[parent], this.store[child]];
      this.heapifyDown(child);
    }
  }
}


function topNBuzzwords(numToys, topFeatures, features, numQuotes, quotes) {
  const quoteWords = parseQuotes(quotes);
  const featureCount = scoreFeatures(quoteWords, features);
  console.log(featureCount);
  const weightFunc = (feat1, feat2) => {
    //feat1 and feat2 are keys to the featureCount hash
    if (featureCount[feat1][0] > featureCount[feat2][0]) {
      return true;
    }
    if (featureCount[feat1][0] === featureCount[feat2][0]) {
      if (featureCount[feat1][1] > featureCount[feat2][1]) return true;
      if (featureCount[feat1][1] === featureCount[feat2][1]) {
        return feat1 < feat2;
      }
    }
    return false;
  };

  const featureHeap = new Heap(weightFunc);
  for (feature in featureCount) {
    featureHeap.push(feature);
  }
  const result = [];
  for (let i = 0; i < topFeatures; i++) {
    result.push(featureHeap.getMax());
  }
  return result;
}


const parseQuotes = (quotes) => {
  const quoteWords = [];
  quotes.forEach((quote, idx) => {
    let currQuoteWords = quote.split(" ");
    quoteWords[idx] = currQuoteWords.map((word) => {
      let alteredWord = word.toLowerCase();
      alteredWord = alteredWord.replace(/[-.,()&$#!\?\[\]{}"':;]/g, "");
      return alteredWord;
    });
  });
  return quoteWords;
};

const scoreFeatures = (quoteWords, features) => {
  const featureCount = {};
  features.forEach((feature) => featureCount[feature] = [0, 0]);
  quoteWords.forEach((words) => {
    let uniqQuote = {};
    words.forEach((word) => {
      if (featureCount[word]) {
        featureCount[word][0]++;
        if (!uniqQuote[word]) {
          featureCount[word][1]++;
          uniqQuote[word] = true;
        }
      }
    });
  });
  return featureCount;
};

let numToys = 6,
  topToys = 2,
  toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"],
  numQuotes = 6,
  quotes = [
    "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
    "The new Elmo dolls are super high quality",
    "Expect the Elsa dolls to be very popular this year, Elsa!",
    "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
    "For parents of older kids, look into buying them a drone",
    "Warcraft is slowly rising in popularity ahead of the holiday season"
  ];

console.log(topNBuzzwords(numToys, topToys, toys, numQuotes, quotes));