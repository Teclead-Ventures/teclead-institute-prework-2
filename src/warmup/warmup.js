/*
WARMUP

If you are stuck or need a hint, check out the test file warmup.test.js.

To test your solutions, run the following command in your terminal:

npm t warmup
*/

/*
Complete the function reverseString below.

It has one parameter, a string.
It should return a string containing the characters of the input string in reverse order.

Example:
reverseString('abc') // => 'cba'
reverseString('hello') // => 'olleh'
*/
function reverseString(str) {}

/*
Complete the function sum below.

It has one parameter (an array of numbers).
It should return the sum of all the numbers in the array.

Example:
sum([1, 2, 3]) // => 6
*/
function sum(arr) {}

/*
Complete the function mean below.

It has one parameter (an array of numbers).
It should return the arithmetic mean of all the numbers in the array.

Example:
mean([1, 2, 3]) // => 2
mean([1, 2, 3, 4]) // => 2.5
*/
function mean(nums) {}

/*
Complete the function findMax below.

It has one parameter (an array of numbers).
It should return the greatest number in the array.

Example:
findMax([11, -2, 3]) // => 11
findMax([9, 0, 21, -4]) // => 21
*/
function findMax(arr) {}

/*
Complete the function uppercase below.

It has one parameter (an array of strings).
It should return an array of strings with all the strings in the input array uppercased.

Example:
uppercase(['hello', 'world']) // => ['HELLO', 'WORLD']
*/
function uppercase(arr) {}

/*
Complete the function capitalize below.

It has one parameter (an array of strings).
It should return an array of strings with the first letter of each string capitalized, and all other letters lowercased.

Example:
capitalize(['hello', 'world']) // => ['Hello', 'World']
*/
function capitalize(arr) {}

/*
Complete the function snakeCase below.

It has one parameter (a string).
It should return a string containing the input string with all the spaces replaced with underscores, and the first letter of each word lowercased.

Example:
snakeCase('Hello World') // => 'hello_world'
snakeCase('Hello WORLD) // => 'hello_wORLD'
*/
function snakeCase(str) {}

/*
Complete the function incrementBy below.

It has two parameters (an array of numbers, and a number).
It should return an array of numbers with each number in the input array incremented by the second parameter.

Example:
incrementBy([1, 2, 3], 2) // => [3, 4, 5]
incrementBy([1, 2, 3], -1) // => [0, 1, 2]
*/
function incrementBy(nums, incrementVal) {}

/*
Complete the function appendTo below.

It has two parameters (an array of strings, and a string).
It should return an array of strings with the second parameter appended to the end of each string in the input array.

Example:
appendTo(['hello', 'world'], '!') // => ['hello!', 'world!']
*/
function appendTo(stringsArr, appendVal) {}

/*
Complete the function insertAt below.

It has three parameters (an array of strings, a string, and a number).
It should return an array of strings with the second parameter inserted at the index of the third parameter.

Example:
insertAt(['hello', 'world'], '!', 1) // => ['h!ello', 'w!orld']
*/
function insertAt(stringsArr, insertVal, index) {}

/*
Complete the function wordCounts below.

It has one parameter (a string).
It should return an object containing the number of times each word appears in the input string.

Example:
wordCounts('hello world') // => {hello: 1, world: 1}
wordCounts('hello world hello') // => {hello: 2, world: 1}
*/
function wordCounts(str) {}

module.exports = {
  reverseString,
  sum,
  mean,
  findMax,
  uppercase,
  capitalize,
  snakeCase,
  incrementBy,
  appendTo,
  insertAt,
  wordCounts,
};
