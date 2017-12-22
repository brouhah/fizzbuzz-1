/**
 * Plays a game of FizzBuzz.
 *
 * @param  {Number}   start The number from which to start the game
 * @param  {Number}   end   The number at which the game ends
 * @return {[String]}       An array of strings representing the output
 */
playFizzBuzz = (start = 1, end = 101) => {

  // initialize the output
  let output = [];

  // loop from the start number to the end number
  for (let i = start; i < end; i += 1) {
    if (0 === i%3 + i%5) {      // if a multiple of BOTH 3 and 5
      output.push('FizzBuzz');  // add "FizzBuzz" to the output
      continue;                 // stop here, go on to next loop iteration
    }
    if (0 === i%3) {            // if a multiple of 3
      output.push('Fizz');      // add "Fizz" to the output
      continue;                 // stop here, go on to next loop iteration
    }
    if (0 === i%5) {            // if a multiple of 5
      output.push('Buzz');      // add "Buzz" to the output
      continue;                 // stop here, go on to next loop iteration
    }
    output.push(`${i}`);        // otherwise just add the number as a string
  }
  return output;
};

module.exports = playFizzBuzz;