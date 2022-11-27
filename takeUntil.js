/*
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

*/
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = (array, callback) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
    }
  }  
    return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);                            // [ 1, 2, 5, 7, 2 ]
assertArraysEqual(eqArrays(results1, [1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);                              //[ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(eqArrays(results2, ["I've", "been", "to", "Hollywood"]));

