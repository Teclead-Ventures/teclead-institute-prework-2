/*
ARRAY OPERATIONS
*/

function intersection(arrays) {}

function union(arrays) {}

function indexOf(array, value) {}

function unique(array) {}

/*

Complete the forEach function below.

Parameters:
1: array: an array
2: callback: a function

forEach should call the callback on each element of the array.
forEach does not return anything.

Here's a link to the mdn documentation for forEach():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/

function forEach(array, callback) {}

/*
Complete the map function below.

Parameters:
1: array: an array
2: callback: a function

map should return a new array filled with elements that are the result
of calling the callback function on each element of the input array.

Here's a link to the mdn documentation for map():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

function map(array, callback) {}

function filter(collection, callback) {}

function reject(collection, callback) {}

function every() {}

function some() {}

/*

Complete the reduce function below.

Parameters:
array: an array
callback: a function
initialValue: any type (optional)

Return value:
the final result of invoking the callback function for every element in the entire array

reduce() takes an array and reduces its elements to a single value.
Example – summing numbers in an array:

const nums = [4, 1, 3];
function add (a, b) {
  return a + b;
}
reduce(nums, add, 0); // -> 8

Here's how it works. The function has an 'accumulator value' which is initialized as
the initialValue argument (if it is provided – what happens if it's not provided
is a small detail covered at the end)

reduce() executes the callback once for each element in the array.
reduce() automatically makes sure the callback function always receives these arguments:

1. the 'accumulator' value in its current state
2. the current array element
3. the current array index
4. the whole array itself

3. and 4. are less commonly useful – but they're there if you need them.

On each iteration, reduce() expects the callback function to return a value.
reduce() then reassigns the 'accumulator' to this newly returned value.

The final value of the 'accumulator' after the whole array has been visited
is what gets returned by reduce() overall.

A clarification: if no argument is provided for initialValue
reduce() automatically initializes the accumulator to be the first array element,
and then begins iterating from the second element.

Here's a link to the mdn documentation for reduce():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

function reduce(array, callback, initialValue) {}

function flatten(array) {}

function prioritize(array, callback) {}

module.exports = {
  intersection,
  union,
  indexOf,
  unique,
  forEach,
  map,
  filter,
  reject,
  every,
  some,
  reduce,
  flatten,
  prioritize,
};
