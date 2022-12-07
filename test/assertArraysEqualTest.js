const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');
const assertArraysEqual = require('../assertArraysEqual.js');

// TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

