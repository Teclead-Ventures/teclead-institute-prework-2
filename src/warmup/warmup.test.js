const {
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
} = require('./warmup');

const mocks = {
  strings: ['hello world!', 'we love JS', 'css not less so...'],
  numbers: [
    [2, 17, -11, 0],
    [128, 39, -22, 20],
    [12, 99, 43, 11],
  ],
};

describe('reverseString()', () => {
  const results = mocks.strings.map(reverseString);
  const expected = ['!dlrow olleh', 'SJ evol ew', '...os ssel ton ssc'];

  test('should return a string with characters reversed', () => {
    expect(results).toEqual(expected);
  });
});

describe('sum()', () => {
  const results = mocks.numbers.map(sum);
  const expected = [8, 165, 165];

  test('should return the sum of numbers in the input array', () => {
    expect(results).toEqual(expected);
  });
});

describe('mean()', () => {
  const results = mocks.numbers.map(mean);
  const expected = [2, 41.25, 41.25];

  test('should return the sum of numbers in the input array', () => {
    expect(results).toEqual(expected);
  });
});

describe('findMax()', () => {
  const results = mocks.numbers.map(findMax);
  const expected = [17, 128, 99];

  test('should return the sum of numbers in the input array', () => {
    expect(results).toEqual(expected);
  });
});
