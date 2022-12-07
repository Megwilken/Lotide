const eqArrays = require('../eqArrays.js');
const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual.js');

// TEST CODE
console.log(middle([1])); 
console.log(middle([1, 2])); 

console.log(middle([1, 2, 3])); 
console.log(middle([1, 2, 3, 4, 5])); 

console.log(middle([1, 2, 3, 4])); 
console.log(middle([1, 2, 3, 4, 5, 6])); 

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
