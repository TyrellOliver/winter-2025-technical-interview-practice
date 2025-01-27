/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */

function isPalindrome(str) {
  // If the data type of the input is not a string
  if (typeof str !== "string") {
    //  turn it into a string
    str = str.toString();
  }

  // Reasign the string and lowercase it and replace everything that is not letters and nums with an empty string
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // console.log(str)

  // split the string, reverse it and rejoin it
  let splitStr = str.split("").reverse().join("");
  // console.log(splitStr)

  // Compare the reversed string with the input string
  if (splitStr === str) {
    return true;
  }

  // Return false if all those conditions are not true
  return false;
}

// console.log(isPalindrome(" ")); // true
// console.log(isPalindrome("A")); // true
// console.log(isPalindrome("mom")); // true
// console.log(isPalindrome("sat")); // false

// console.log(isPalindrome("mo m")); // true
// console.log(isPalindrome("Mo m")); // true
// console.log(isPalindrome("Mom")); // true

// console.log(isPalindrome("!mOm!")); // true
// console.log(isPalindrome(123321)); // true
console.log(isPalindrome("!&!")); // true
// console.log(isPalindrome("Brother")); // false
// console.log(isPalindrome("Yay it works!")); // false

module.exports = isPalindrome;
