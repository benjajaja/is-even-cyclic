module.exports = function(number) {
  if (number === 0) {
    return true;
  }
  var isOdd = require("is-odd-cyclic");
  var incr = number > 0 ? -1 : 1;
  return isOdd(number + incr);
};

