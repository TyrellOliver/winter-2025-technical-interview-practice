// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters

// 5 => '*****'
// 12 => '************'
// 3 => "***"

function numOfAsterisks(num) {
  // return "*".repeat(num)

  // Declare a string variable
  let asterisks = "";
  // Iterate up until the num
  for (let i = 0; i < num; i++) {
    // in each iterateion add the asterisk string to the variable
    asterisks += "*";
  }
  // return the variable
  return asterisks;
}

// console.log(numOfAsterisks(5));
// console.log(numOfAsterisks(12));
// console.log(numOfAsterisks(3));

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.

// 5 => '*   *'
// 12 => '*          *'

function firstAndLastAreAstrisks(num) {
  let results = "";
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === num - 1) {
      results += "*";
    } else {
      results += " ";
    }
  }
  return results;
}

// console.log(firstAndLastAreAstrisks(5)); // *   *
// console.log(firstAndLastAreAstrisks(12)); // *          *

/* 
                       5     5         5          5
3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle


5,5 => *****     3,3 => ***     1,2 => **     4,3 => ***
       *   *            * *                          * *
       *   *            ***                          * *
       *   *                                         ***
       *****
*/

/**
 * @param {Number} n - The number of lines
 * @param {Number} m - The number of characters
 * The first and last line should be made of all "*"
 * All other lines should start and end with "*" and have space in between
 */
const nlinesOfMCharacters = (n, m) => {
  // bring in both previous functions
  let lines = numOfAsterisks(m); //.repeat(n); // .split("");
  // console.log(lines); // ****
  let characters = firstAndLastAreAstrisks(m);
  // console.log(characters); // * *
  let results = "";
  // console.log(results);

  // console.log(
  //   (results =
  //     lines +
  //     "\n" +
  //     characters +
  //     "\n" +
  //     characters +
  //     "\n" +
  //     characters +
  //     "\n" +
  //     lines)
  // );
  // console.log((results = lines + "\n" + characters + "\n" + lines));
  // console.log(
  //   (results = lines + "\n" + characters + "\n" + characters + "\n" + lines)
  // );
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      results += "\n";
    }
    if (i === 0 || i === n - 1) {
      results += lines;
    } else {
      results += characters;
    }
  }
  /*
  i = 0 = results= lines     
  i = 1 = results= lines + "\n" + characters 
  i = 2 = results= lines + "\n" + characters + "\n" + characters 
  

  
  
  */

  console.log(results);
};

// console.log(nlinesOfMCharacters(5, 5));
// console.log(nlinesOfMCharacters(3,3))
// console.log(nlinesOfMCharacters(1,2))
console.log(nlinesOfMCharacters(4, 3));

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.

module.exports = { numOfAsterisks, firstAndLastAreAstrisks };
