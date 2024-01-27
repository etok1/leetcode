/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const sArr = s.split("");
  let result = 0;

  for (let i = 0; i < sArr.length; i++) {
    let next = roman[sArr[i + 1]];
    let current = roman[sArr[i]];
    console.log(current, next);
    if (next > current) {
      result += next - current;
      i++;
      console.log(result);
    } else {
      result += current;
      console.log(result);
    }
  }
  console.log(result);
  return result;
};
