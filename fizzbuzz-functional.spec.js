const fb = require('./fizzbuzz-functional');

describe("A Functional FizzBuzz program", () => {

  it("fizz(x) == 'Fizz' when x % 3 == 0, else identity", () => {
    // multiples of 3
    expect(fb.fizz( 3 )).toBe('Fizz');
    expect(fb.fizz('6')).toBe('Fizz'); // parse numeric strings, too
    expect(fb.fizz(126)).toBe('Fizz');
    // non-multiples of 3
    expect(fb.fizz( 1 )).toBe('1');
    expect(fb.fizz('2')).toBe('2');
    expect(fb.fizz('Buzz')).toBe('Buzz');
  });

  it("buzz(x) == 'Buzz' when x % 5 == 0, else identity", () => {
    // multiples of 5
    expect(fb.buzz( 5  )).toBe('Buzz');
    expect(fb.buzz('10')).toBe('Buzz'); // parse numeric strings, too
    expect(fb.buzz(1250)).toBe('Buzz');
    // non-multiples of 5
    expect(fb.buzz( 1 )).toBe('1');
    expect(fb.buzz('2')).toBe('2');
    expect(fb.buzz('Fizz')).toBe('Fizz');
  });

  it("fzbz(x) == 'FizzBuzz' when x % 15 == 0, else identity", () => {
    // multiples of 15
    expect(fb.fzbz( 15 )).toBe('FizzBuzz');
    expect(fb.fzbz('45')).toBe('FizzBuzz'); // parse numeric strings, too
    expect(fb.fzbz(1500)).toBe('FizzBuzz');
    // non-multiples of 15
    expect(fb.fzbz( 1 )).toBe('1');
    expect(fb.fzbz('2')).toBe('2');
    expect(fb.fzbz('Fizz')).toBe('Fizz');
  });

  it("fibu(x) returns 'Fizz', 'Buzz', 'FizzBuzz' or identity", () => {
    expect(fb.fibu(  12  )).toBe('Fizz');
    expect(fb.fibu( '18' )).toBe('Fizz');
    expect(fb.fibu(  10  )).toBe('Buzz');
    expect(fb.fibu( '25' )).toBe('Buzz');
    expect(fb.fibu(  30  )).toBe('FizzBuzz');
    expect(fb.fibu( '45' )).toBe('FizzBuzz');
    expect(fb.fibu(  11  )).toBe('11');
    expect(fb.fibu('Fizz')).toBe('Fizz');
    expect(fb.fibu('Buzz')).toBe('Buzz');
    expect(fb.fibu('FizzBuzz')).toBe('FizzBuzz');
  });

  it("playFizzBuzz(start, end) plays FizzBuzz from start to end", () => {
    let gameToTwenty = [
      '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8',
      'Fizz', 'Buzz', '11', 'Fizz', '13', '14',
      'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'
    ];
    expect(fb.playFizzBuzz(1, 21)).toEqual(gameToTwenty);
  });

});