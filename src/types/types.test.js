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
