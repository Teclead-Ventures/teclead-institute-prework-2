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
  strings: ['hello world!', 'we love JS', 'css less so...'],
  numbers: [
    [2, 17, -11, 0],
    [128, 39, -22, 20],
    [12, 99, 43, 11],
  ],
};

describe('reverseString()', () => {
  const results = mocks.strings.map(reverseString);
  const expected = ['!dlrow olleh', 'SJ evol ew', '...os ssel ssc'];

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

  test('should return arithmetic mean of the numbers in the input array', () => {
    expect(results).toEqual(expected);
  });
});

describe('findMax()', () => {
  const results = mocks.numbers.map(findMax);
  const expected = [17, 128, 99];

  test('should return the greatest number in the input array', () => {
    expect(results).toEqual(expected);
  });
});

describe('uppercase()', () => {
  const results = uppercase(mocks.strings);
  const expected = ['HELLO WORLD!', 'WE LOVE JS', 'CSS LESS SO...'];

  test('should uppercase all the strings in the array', () => {
    expect(results).toEqual(expected);
  });
});

describe('capitalize()', () => {
  const results = capitalize(mocks.strings);
  const expected = ['Hello world!', 'We love js', 'Css less so...'];

  test('should capitalize all the strings in the array', () => {
    expect(results).toEqual(expected);
  });
});

describe('snakeCase()', () => {
  const results = mocks.strings.map(snakeCase);
  const expected = ['hello_world!', 'we_love_jS', 'css_less_so...'];

  test('should convert all the strings in the array to snake case', () => {
    expect(results).toEqual(expected);
  });
});

describe('incrementBy()', () => {
  const results = mocks.numbers.map(nums => incrementBy(nums, 2));
  const expected = [
    [4, 19, -9, 2],
    [130, 41, -20, 22],
    [14, 101, 45, 13],
  ];

  test('should add the input increment value to each number in the input array', () => {
    expect(results).toEqual(expected);
  });
});

describe('appentTo()', () => {
  const results = appendTo(mocks.strings, '!');
  const expected = ['hello world!!', 'we love JS!', 'css less so...!'];

  test('should add the input increment value to each number in the input array', () => {
    expect(results).toEqual(expected);
  });
});
