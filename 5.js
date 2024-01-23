// Given an integer x, return true if x is a
// palindrome
// and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function isPalindrome(x) {
  let xString = x.toString();
  let xArr = xString.split("");
  let lastEl = xArr[xArr.length - 1];
  for (let i = 0; i < xArr.length; i++) {
    // console.log("working");
    // console.log(lastEl);
    if (xArr[0] === lastEl) {
      return true;
    } else {
      return false;
    }
  }
};
