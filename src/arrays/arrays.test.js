const {
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
} = require('./arrays');

function setup() {
  return {
    numbers: [1, 2, 3, 4, 5],
    initialNum: 10,
    expectedSums: [15, 25],
    mockAdd: jest.fn(function add(x, y) {
      return x + y;
    }),
    mockSquare: jest.fn(function square(x) {
      return x ** 2;
    }),
    strings: ['h', 'e', 'l', 'l', 'o'],
    initialStr: 'Oh ',
    expectedStrings: ['HELLO', 'OH HELLO'],
    mockUpperCase: jest.fn(function upperCase(accumulator, string) {
      return `${(accumulator + string).toUpperCase()}`;
    }),
  };
}

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
