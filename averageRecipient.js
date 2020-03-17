// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);


/* 
Your previous Plain Text content is preserved below:

Given a list of recipients and how much money each is owed, you should return the list of recipients and how much each would be paid after following the business logic below:

1) no recipient is paid more than they are owed
2) the amount is divided as evenly as possible between the recipients

// $10
// two people  ($6, $8)
// ($5, $5)

// $10
// three people ($2, $4, $6)
// ($2, $4, $4)

// $10
// three people ($1, $1, $1, $1, $2, $4, $6)
// ($1, $1, $1, $1, $2, $2, $2)


keys : names of people
values : amounts


for loop -- add up all the values / count number of options
  - Max
  - Length
  
sort values from lowest to highest
  - saving elements as tuples ex: ["steven": $1];
  
result = {key = name: value = amount filled}
  
iterate through array, from lowest to highest
  - if amount < average
      -- fill whole amount
      
      -- remove $amount from total
      -- remove another counter for length
      

return result

 */


const evenDistribution = function (object, spending) {
  let keys = Object.keys(object);
  let totalAmt = 0;
  let totalPeople = keys.length;
  let preSorted = [];

  for (let i = 0; i < keys.length; i++) {
    let person = keys[i];
    let amt = object[person];
    totalAmt += amt;

    preSorted.push([person, amt]);
  }

  let sorted = preSorted.sort((a, b) => {
    let aValue = a[1];
    let bValue = b[1];

    if (aValue >= bValue) {
      return -1;
    } else {
      return 1;
    }
  });

  let result = {};
  let names = [];
  let established = false;

  while (sorted.length) {
    let curr = sorted.pop();
    let avg = Math.floor(spending / totalPeople);
    let amt;
    if (curr[1] <= avg) {
      amt = curr[1];
    } else {
      names.push(curr[0]);

      established = established ? established : avg;
      amt = established;
    }

    result[curr[0]] = amt;
    spending -= amt;
    totalPeople--;
  }

  if (spending && names.length) {
    names = names.sort();
    let idx = 0;

    while (spending && idx < names.length) {
      let person = names[idx];
      result[person] += 1;
      spending--;
      idx++;
    }

  }

  return result;
}

let obj = {
  "chris": 3,
  "Jared": 10,
  "Zelsa": 12,
  "Steve": 7,
  "simon": 1,
  "patrick": 5,
  "Haley": 1
}

let spending = 1000;

// total: 7
// people: 1

// res: {Simon: 1, Haley: 1, chris: 3, patrick: 5, Steve:6, Jared: 6, Elsa: 7}

console.log(evenDistribution(obj, spending));