// Given an integer x, return true if x is a
// palindrome
// and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function isPalindrome(x) {
  let xString = x.toString();
  let xReversed = xString.split("").reverse().join("");
  return xString === xReversed;
};
