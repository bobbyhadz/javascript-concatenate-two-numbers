// EXAMPLE 1 - Concatenate Two Numbers in JavaScript

const num1 = 1;
const num2 = 2;

const result = '' + num1 + num2;
console.log(result); // 👉️ '12'

console.log(typeof result); // string

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function concatenateNumbers(num1, num2) {
//   return '' + num1 + num2;
// }

// console.log(concatenateNumbers(1, 2)); // 👉️ '12'
// console.log(concatenateNumbers(5, 6)); // 👉️ '56'

// ------------------------------------------------------------------

// // EXAMPLE 3 - Concatenate Two Numbers in JavaScript using `Array.join()`

// function concatenateNumbers(numbers) {
//   return numbers.join('');
// }

// console.log(concatenateNumbers([1, 2])); // 👉️ '12'
// console.log(concatenateNumbers([1, 2, 3])); // 👉️ '123'
// console.log(concatenateNumbers([1, 2, 3, 4])); // 👉️ '1234'

// ------------------------------------------------------------------

// // EXAMPLE 4 - Concatenate Two Numbers in JavaScript using a template literal

// const num1 = 1;
// const num2 = 2;

// const result = `${num1}${num2}`;

// console.log(result); // 👉️ '12'
