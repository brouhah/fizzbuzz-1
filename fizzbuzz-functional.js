const λ = require('ramda');

const fizz = x => +x %  3 !== 0 ? `${x}`: 'Fizz';
const buzz = x => +x %  5 !== 0 ? `${x}`: 'Buzz';
const fzbz = x => +x % 15 !== 0 ? `${x}`: 'FizzBuzz';
const fibu = λ.pipe(fzbz, fizz, buzz);
const playFizzBuzz = (start, end) => λ.map(fibu, λ.range(start, end));

module.exports = {
  fizz,
  buzz,
  fzbz,
  fibu,
  playFizzBuzz
};