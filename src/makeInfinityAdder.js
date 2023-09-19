'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const currentSum = sum;

      sum = 0;

      return currentSum;
    } else {
      sum += args.reduce((acc, val) => acc + val, 0);

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
