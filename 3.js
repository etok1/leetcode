// Count Occurrences:

// Count how many times each element appears in an array and return the counts as an object.

function countElement(arr) {
  const myObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (myObj[arr[i]] === undefined) {
      myObj[arr[i]] = 1;
    } else {
      myObj[arr[i]]++;
    }
    console.log(myObj[arr[i]]);
  }
}
countElement([1, 2, 2, 3, 4, 5, 6, 5, 6, 6, 6, 6]);
