// Task

// Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

function factorial(n) {
  if (n === 0 || n === 1) {
    return 0;
  }
  return n * factorial(n - 1);
}
const result = factorial(5);
console.log(result);
