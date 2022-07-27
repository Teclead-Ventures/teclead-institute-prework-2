/*
THINKING ABOUT TYPES


If you are stuck or need a hint, check out the test file types.test.js.

To test your solutions, run the following command in your terminal:

npm t types
*/

/*
Complete the function isNumber below.

It has one parameter (a value).
It should return true if the value is a number, and false otherwise.

Example:
isNumber(1) // => true
isNumber('1') // => false
isNumber(true) // => false
*/
function isNumber(value) {}

/*
Complete the function isArray below.

It has one parameter (a value).
It should return true if the value is an array, and false otherwise.

Example:
isArray([1, 2, 3]) // => true
isArray({}) // => false
isArray(1) // => false
*/
function isArray(value) {}

/*
Complete the function isObject below.

It has one parameter (a value).
It should return true if the value is an object, and false otherwise.
Note that arrays and functions are objects.

Example:
isObject({}) // => true
isObject([]) // => true
isObject(1) // => false
*/
function isObject(value) {}

/*
Complete the function isFunction below.

It has one parameter (a value).
It should return true if the value is a function, and false otherwise.

Example:
isFunction(function() {}) // => true
isFunction(1) // => false
*/
function isFunction(value) {}

/*
Complete the function isNaN below.

It has one parameter (a value).
It should return true if the value is NaN, and false otherwise.

Example:
isNaN(NaN) // => true
isNaN(1) // => false
*/
function isNaN(value) {}

/*
Complete the function toNumbers below.

It has one parameter (an array of values).
It should return an array of numbers, where each number is the result of coercing the corresponding value in the input array to be a number.

You will notice that some interesting things happen when certain values are coerced to numbers.

Example:
toNumbers([1, '2', 3]) // => [1, 2, 3]
*/
function toNumbers(array) {}

/*
Complete the function toStrings below.

It has one parameter (an array of values).
It should return an array of strings, where each string is the result of coercing the corresponding value in the input array to be a string.

Example:
toStrings([1, 2, 'a']) // => ['1', '2', 'a']
*/
function toStrings(arr) {}

/*
Complete the function removeNumbers below.

It has one parameter (an array of values).
It should return an the same array of values, exccept that each number is removed.

Example:
removeNumbers([1, 'a', 3]) // => ['a']
removeNumbers([1, 2, 3]) // => []
*/
function removeNumbers(arr) {}

/*
Complete the function removeStrings below.

It has one parameter (an array of values).
It should return an the same array of values, exccept that each string is removed.

Example:
removeStrings([1, 'a', 3]) // => [1, 3]
*/
function removeStrings(arr) {}

module.exports = {
  isNumber,
  isArray,
  isObject,
  isFunction,
  isNaN,
  toNumbers,
  toStrings,
  removeNumbers,
  removeStrings,
};
