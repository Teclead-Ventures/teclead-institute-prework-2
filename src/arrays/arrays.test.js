const {
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
} = require('./arrays');

function setup() {
  return {
    data: [
      [5, 10, 15],
      [15, 88, 1, 5, 7],
      [100, 15, 10, 1, 5],
    ],

    numbers: [1, 2, 3, 4, 5],
    numbersWithDuplicates: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    nestedNumbers: [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]],
    deeplyNestedNumbers: [1, 2, [3, 4, [5, [1, 2, [[3, [4, [5]]]]]]]],
    initialNum: 10,
    expectedSums: [15, 25],

    strings: ['h', 'e', 'l', 'l', 'o'],
    nestedStrings: ['h', 'e', 'l', 'l', 'o', ['h', 'e', 'l', 'l', 'o']],
    initialStr: 'Oh ',
    expectedStrings: ['HELLO', 'OH HELLO'],

    mockAdd: jest.fn(function add(x, y) {
      return x + y;
    }),
    mockSquare: jest.fn(function square(x) {
      return x ** 2;
    }),
    mockIsEven: jest.fn(function isEven(x) {
      return x % 2 === 0;
    }),
    mockIsPositive: jest.fn(function isPositive(x) {
      return x > 0;
    }),
    mockIsNegative: jest.fn(function isNegative(x) {
      return x < 0;
    }),
    mockUpperCase: jest.fn(function upperCase(accumulator, string) {
      return `${(accumulator + string).toUpperCase()}`;
    }),
  };
}

describe('intersection(arrays)', () => {
  const { data } = setup();

  const result = intersection(data);
  const expected = [5, 15];

  test('should return an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('the array should contain elements appearing in all of the passed-in arrays', () => {
    expect(result).toEqual(expected);
  });
});

describe('union(arrays)', () => {
  const { data } = setup();

  const result = union(data);
  const expected = [5, 10, 15, 88, 1, 7, 100];

  test('should return an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('returned array should contain all values of the passed-in arrays', () => {
    expect(result).toEqual(expected);
  });
});

describe('unique(array)', () => {
  const { numbers: expected, numbersWithDuplicates } = setup();

  const result = unique(numbersWithDuplicates);

  test('should return an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('returned array should contain all unique values of the passed-in array', () => {
    expect(result).toEqual(expected);
  });
});

describe('prioritize(array, callback)', () => {
  const { numbers, mockIsEven } = setup();

  const result = prioritize(numbers, mockIsEven);
  const expected = [2, 4, 1, 3, 5];

  test('should return a new array', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(numbers);
  });

  test('should call the callback on each element', () => {
    const mockIsEvenCalls = mockIsEven.mock.calls.length;

    expect(mockIsEvenCalls).toBeGreaterThanOrEqual(numbers.length);
  });

  test('elements that returned true when passed to callback should come before those that returned false', () => {
    expect(result).toEqual(expected);
  });
});

describe('forEach(array, callback)', () => {
  const { numbers, mockSquare } = setup();

  const result = forEach(numbers, mockSquare);

  test('should not return anything', () => {
    expect(result).toBeUndefined();
  });

  test('should call callback once for each element in the array', () => {
    expect(mockSquare).toHaveBeenCalledTimes(numbers.length);
  });

  test('should call callback with the correct arguments', () => {
    expect(mockSquare).toHaveBeenCalledWith(1, 0, numbers);
    expect(mockSquare).toHaveBeenCalledWith(2, 1, numbers);
    expect(mockSquare).toHaveBeenCalledWith(3, 2, numbers);
    expect(mockSquare).toHaveBeenCalledWith(4, 3, numbers);
    expect(mockSquare).toHaveBeenCalledWith(5, 4, numbers);
  });
});

describe('map(array, callback)', () => {
  const { numbers, mockSquare } = setup();

  const result = map(numbers, mockSquare);
  const expected = [1, 4, 9, 16, 25];

  test('should return a new array', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(numbers);
  });

  test('callback should be called for every array element', () => {
    expect(mockSquare).toHaveBeenCalledTimes(numbers.length);
  });

  test('array elements should have been transformed by callback', () => {
    expect(result).toEqual(expected);
  });

  test('callback should be called with the correct arguments', () => {
    expect(mockSquare).toHaveBeenCalledWith(1, 0, numbers);
    expect(mockSquare).toHaveBeenCalledWith(2, 1, numbers);
    expect(mockSquare).toHaveBeenCalledWith(3, 2, numbers);
    expect(mockSquare).toHaveBeenCalledWith(4, 3, numbers);
    expect(mockSquare).toHaveBeenCalledWith(5, 4, numbers);
  });
});

describe('filter(array, callback)', () => {
  const { numbers, mockIsEven } = setup();

  const result = filter(numbers, mockIsEven);
  const expected = [2, 4];

  test('should return a new array', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(numbers);
  });

  test('callback should be called for every array element', () => {
    expect(mockIsEven).toHaveBeenCalledTimes(numbers.length);
  });

  test('array elements should have been filtered by callback', () => {
    expect(result).toEqual(expected);
  });

  test('callback should be called with the correct arguments', () => {
    expect(mockIsEven).toHaveBeenCalledWith(1, 0, numbers);
    expect(mockIsEven).toHaveBeenCalledWith(2, 1, numbers);
    expect(mockIsEven).toHaveBeenCalledWith(3, 2, numbers);
    expect(mockIsEven).toHaveBeenCalledWith(4, 3, numbers);
    expect(mockIsEven).toHaveBeenCalledWith(5, 4, numbers);
  });
});

describe('reject(array, callback)', () => {
  const { numbers, mockIsEven } = setup();

  const result = reject(numbers, mockIsEven);
  const expected = [1, 3, 5];

  test('should return a new array', () => {
    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(numbers);
  });

  test('callback should be called for every array element', () => {
    expect(mockIsEven).toHaveBeenCalledTimes(numbers.length);
  });

  test('array elements should have been filtered by callback', () => {
    expect(result).toEqual(expected);
  });
});

describe('every(array, callback)', () => {
  const { numbers, mockIsEven, mockIsPositive } = setup();

  const results = [mockIsEven, mockIsPositive].map(cb => every(numbers, cb));

  test('should return a boolean', () => {
    for (const result of results) {
      expect(typeof result).toBe('boolean');
    }
  });

  test('should return true if callback returns true for every element', () => {
    expect(results[1]).toBe(true);
  });

  test('should return false if callback returns false for at least one element', () => {
    expect(results[0]).toBe(false);
  });
});

describe('some(array, callback)', () => {
  const { numbers, mockIsEven, mockIsPositive, mockIsNegative } = setup();

  const results = [mockIsEven, mockIsPositive, mockIsNegative].map(cb =>
    some(numbers, cb)
  );

  test('should return a boolean', () => {
    for (const result of results) {
      expect(typeof result).toBe('boolean');
    }
  });

  test('should return true if callback returns true for at least one element', () => {
    expect(results[0]).toBe(true);
    expect(results[1]).toBe(true);
  });

  test('should return false if callback returns false for every element', () => {
    expect(results[2]).toBe(false);
  });
});

describe('reduce(array, callback, initialValue) should:', () => {
  const { numbers, strings, initialNum, initialStr, mockAdd, mockUpperCase } =
    setup();

  test('return a single value', () => {
    const {
      expectedSums: [expectedSum],
      expectedStrings: [expectedString],
    } = setup();

    const resultSum = reduce(numbers, mockAdd);
    const resultString = reduce(strings, mockUpperCase);

    expect(resultSum).toBe(expectedSum);
    expect(resultString).toBe(expectedString);
  });

  test('call callback array.length - 1 times if initialValue argument not provided', () => {
    const { mockAdd, mockUpperCase } = setup(); // reset mock functions
    const expected = numbers.length - 1; // numbers and strings arrays have the same length

    reduce(numbers, mockAdd);
    reduce(strings, mockUpperCase);

    expect(mockAdd).toHaveBeenCalledTimes(expected);
    expect(mockUpperCase).toHaveBeenCalledTimes(expected);
  });

  test('return correct value when initialValue argument provided', () => {
    const {
      expectedSums: [, expectedSum],
      expectedStrings: [, expectedStr],
    } = setup();

    const resultSum = reduce(numbers, mockAdd, initialNum);
    const resultString = reduce(strings, mockUpperCase, initialStr);

    expect(resultSum).toBe(expectedSum);
    expect(resultString).toBe(expectedStr);
  });

  test('call callback array.length times when initialValue argument provided', () => {
    const { mockAdd, mockUpperCase } = setup(); // reset mock functions
    const expected = numbers.length;

    reduce(numbers, mockAdd, initialNum);
    reduce(strings, mockUpperCase, initialStr);

    expect(mockAdd).toHaveBeenCalledTimes(expected);
    expect(mockUpperCase).toHaveBeenCalledTimes(expected);
  });
});

describe('flatten(array)', () => {
  const { nestedNumbers, deeplyNestedNumbers } = setup();

  test('should return a new array', () => {
    const result = flatten(nestedNumbers);

    expect(result).toBeInstanceOf(Array);
    expect(result).not.toBe(nestedNumbers);
  });

  test('should flatten a nested array', () => {
    const result = flatten(nestedNumbers);
    const expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    expect(result).toEqual(expected);
  });

  test('should flatten deeply nested arrays', () => {
    const result = flatten(deeplyNestedNumbers);
    const expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    expect(result).toEqual(expected);
  });
});
