const {
  isNumber,
  isArray,
  isObject,
  isFunction,
  isNaN,
  toNumbers,
  toStrings,
  removeNumbers,
  removeStrings,
} = require('./types');

describe('isNumber()', () => {
  test('should return true if the input value is a number, and false otherwise', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-0)).toBe(true);
    expect(isNumber(1.1)).toBe(true);
    expect(isNumber(-1.1)).toBe(true);
    expect(isNumber(0.1)).toBe(true);
    expect(isNumber(-0.1)).toBe(true);
    expect(isNumber(1e10)).toBe(true);
    expect(isNumber(-1e10)).toBe(true);

    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber('')).toBe(false);
    expect(isNumber('1')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(() => {})).toBe(false);
  });
});

describe('isArray()', () => {
  test('should return true if the value is an array, and false otherwise.', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray([1, 2, 3, 'a', 'b', 'c'])).toBe(true);
    expect(isArray([1, 2, 3, { a: 1, b: 2, c: 3 }])).toBe(true);
    expect(isArray([1, 2, 3, () => {}])).toBe(true);
    expect(isArray([1, 2, 3, function () {}])).toBe(true);
    expect(isArray([1, 2, 3, NaN])).toBe(true);
    expect(isArray([1, 2, 3, Infinity])).toBe(true);
    expect(isArray([1, 2, 3, -Infinity])).toBe(true);
    expect(isArray([1, 2, 3, 0])).toBe(true);
    expect(isArray([1, 2, 3, -0])).toBe(true);
    expect(isArray([1, 2, 3, 1.1])).toBe(true);
    expect(isArray([1, 2, 3, -1.1])).toBe(true);
    expect(isArray([1, 2, 3, 0.1])).toBe(true);
    expect(isArray([1, 2, 3, -0.1])).toBe(true);
    expect(isArray([1, 2, 3, 1e10])).toBe(true);
    expect(isArray([1, 2, 3, -1e10])).toBe(true);

    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray('1')).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(NaN)).toBe(false);
  });
});

describe('isObject()', () => {
  test('should return true if the value is an object, and false otherwise.', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1, b: 2, c: 3 })).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject(() => {})).toBe(true);

    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject('abc')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject(123)).toBe(false);
  });
});

describe('isFunction()', () => {
  test('should return true if the value is a function, and false otherwise.', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
    expect(isFunction(function* () {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);

    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction('')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction(123)).toBe(false);
  });
});

describe('isNan()', () => {
  test('should return true if the value is NaN, and false otherwise.', () => {
    expect(isNaN(NaN)).toBe(true);
    expect(isNaN(Number.NaN)).toBe(true);
    expect(isNaN(Infinity)).toBe(false);
    expect(isNaN(-Infinity)).toBe(false);
    expect(isNaN(1)).toBe(false);
    expect(isNaN(-1)).toBe(false);
    expect(isNaN(1.1)).toBe(false);
    expect(isNaN(-1.1)).toBe(false);
    expect(isNaN([])).toBe(false);
    expect(isNaN({})).toBe(false);
    expect(isNaN(() => {})).toBe(false);
  });
});
