var assert = require('assert').strict;

var isEven = require("./index.js");

assert.equal(true, isEven(42), "42 is even");
assert.equal(false, isEven(43), "43 is not even");
assert.equal(false, isEven(1), "1 is not even");
assert.equal(true, isEven(0), "0 is even");
assert.equal(false, isEven(-1), "-1 is not even");
assert.equal(true, isEven(-42), "-42 is even");
console.log("all tests passed.");
