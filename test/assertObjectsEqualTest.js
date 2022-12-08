const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual.js');
const eqObjects = require('../eqObjects.js');
const inspect = require('util').inspect;


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true);  // =>true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false);  // => false


