/*
ARRAY OPERATIONS

If you are stuck or need a hint, check out the test file arrays.test.js.

To test your solutions, run the following command in your terminal:

npm t arrays
*/

/*
Complete the intersection function below.

Parameters:
1: arrays: an array of arrays

intersection() should return an array of values that are present in all of the input arrays.

Example:
intersection([[4, 5, 6], [1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]]) // -> [4, 5, 6]
*/
function intersection(arrays) {}

/*
Complete the union function below.

Parameters:
1: arrays: an array of arrays

union() should return an array of values that are present in any of the input arrays.
The returned array should not contain duplicates.
Preserve the order of the values in the input arrays.

Example:
union([[4, 5, 6], [1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9]]) // -> [4, 5, 6, 1, 2, 3, 7, 8, 9]
*/
function union(arrays) {}

/*
Complete the unique function below.

Parameters:
1: array: an array

unique() should return a new array with all duplicate elements removed.

Example:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
unique(array); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
function unique(array) {}

/*
Complete the prioritize function below.

Parameters:
1: array: an array
2: callback: a function

The provided callback will return either true or false.
prioritize should iterate through the array and perform the callback on each element,
returning a new array where all the elements that yielded a
return value of true come first, and the elements that yielded false come after.

Example:
const array = [1, 2, 3, 4, 5];
function isEven (element, index, array) {
  return element % 2 === 0;
}
prioritize(array, isEven); // -> [2, 4, 1, 3, 5]
*/
function prioritize(array, callback) {}

/*
Complete the forEach function below. Do not use the native .forEach() method.

Parameters:
1: array: an array
2: callback: a function

forEach() should call the callback on each element of the array.

The callback should be called with the following arguments:
1. the current array element
2. the current array index
3. the whole array itself

forEach does not return anything.

Here's a link to the mdn documentation for .forEach():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Example:
const array = ['a', 'b', 'c'];
forEach(array, (element, index, array) => {
  console.log(element, index, array);
});
NOTE THESE ARE NOT RETURN VALUES, ONLY LOGS.
// -> 'a', 0, ['a', 'b', 'c']
// -> 'b', 1, ['a', 'b', 'c']
// -> 'c', 2, ['a', 'b', 'c']
*/
function forEach(array, callback) {}

/*
Complete the map function below. Do not use the native .map() method.

Parameters:
1: array: an array
2: callback: a function

map() should return a new array filled with elements that are the result
of calling the callback function on each element of the input array.

The callback function should be called with the following arguments:
1. the current array element
2. the current array index
3. the whole array itself

Here's a link to the mdn documentation for .map():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Example:
const array = [1, 2, 3, 4, 5];
map(array, (element, index, array) => {
  return element * 2;
}); // -> [2, 4, 6, 8, 10]
*/
function map(array, callback) {}

/*
Complete the filter function below. Do not use the native .filter() method.

Parameters:
1: array: an array
2: callback: a function

filter() should return a new array with all elements that yielded a return value of true from the callback function.

The callback function should be called with the following arguments:
1. the current array element
2. the current array index
3. the whole array itself

Here's a link to the mdn documentation for .filter():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Example:
const array = [1, 2, 3, 4, 5];
filter(array, function isEven (element, index, array) {
  return element % 2 === 0;
}); // -> [2, 4]
*/
function filter(array, callback) {}

/*
Complete the reject function below.

Parameters:
1: array: an array
2: callback: a function

reject() should return a new array with all elements that yielded a return value of false from the callback function.

The callback function should be called with the following arguments:
1. the current array element
2. the current array index
3. the whole array itself

Example:
const array = [1, 2, 3, 4, 5];
reject(array, function isEven (element, index, array) {
  return element % 2 === 0;
}); // -> [1, 3, 5]
*/
function reject(array, callback) {}

/*
Complete the every function below. Do not use the native .every() method.

Parameters:
1: array: an array
2: callback: a function

every() should return true if the callback function returns true for every element in the array.
Otherwise, it should return false.

The callback function should be called with the following arguments:
1. the current array element
2. the current array index
3. the whole array itself

Here's a link to the mdn documentation for .every():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

Example:
function isEven (element, index, array) {
  return element % 2 === 0;
}
const array = [1, 2, 3, 4, 5];
every(array, isEven); // -> false

const array = [2, 4, 6, 8, 10];
every(array, isEven); // -> true
*/
function every(array, callback) {}

/*
Complete the some function below. Do not use the native .some() method.

Parameters:
1: array: an array
2: callback: a function

some() should return true if the callback function returns true for any element in the array.
Otherwise, it should return false.

The callback function should be called with the following arguments:
1. the current array element
2. the current array index
3. the whole array itself

Here's a link to the mdn documentation for .some():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

Example:
function isEven (element, index, array) {
  return element % 2 === 0;
}
const array = [1, 2, 3, 4, 5];
some(array, isEven); // -> true

const array = [1, 3, 5];
some(array, isEven); // -> false
*/
function some(array, callback) {}

/*
Complete the reduce function below. Do not use the native .reduce() method.

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

Here's a link to the mdn documentation for .reduce():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Example:
const array = [1, 2, 3, 4, 5];
reduce(array, (acc, element, index, array) => {
  // note that index and array are not used here
  return acc + element;
}); // -> 15
*/
function reduce(array, callback, initialValue) {}

/*
Complete the flatten function below. Do not use the native .flat() method.

Parameters:
1: array: an array

flatten() should return a new array with all elements of the input array flattened into a single array.

Getting this to work for arrays of any depth is a challenge. You will need to use recursion. Here's a link to a great intro to recursion: https://medium.com/codesmith-software-engineering/recursion-a-free-course-with-challenges-video-1c24074f134a

And here's a link to the mdn documentation for .flat():
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

Example:
const array = [1, [2, 3], [[4], [5]]];
flatten(array); // -> [1, 2, 3, 4, 5]
*/
function flatten(array) {}

module.exports = {
  intersection,
  union,
  unique,
  prioritize,
  forEach,
  map,
  filter,
  reject,
  every,
  some,
  reduce,
  flatten,
};
