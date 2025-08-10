// !! How to write a function in JavaScript !!
/*
 * function name
 * function parameters
 * function body
 * function return value
 */

function add(a, b) {
  // function body
  return a + b; // function return value
}

// console.log(add(2, 3)); // Output: 5

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum; // function return value
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum);

function even(arr) {
  const evenNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumbers.push(arr[i]);
    }
  }
  return evenNumbers; // function return value
}
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = even(numbersArray);
console.log(evenNumbers); // Output: [2, 4, 6, 8]
