const playFizzBuzz = require('./fizzbuzz-procedural');

describe("A FizzBuzz game", () => {

  let gameToTwenty = [
    '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8',
    'Fizz', 'Buzz', '11', 'Fizz', '13', '14',
    'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'
  ];

  it("should have predictable output", () => {
    expect(playFizzBuzz(1, 21)).toEqual(gameToTwenty);
  });

});