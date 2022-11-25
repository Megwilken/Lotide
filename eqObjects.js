//Implement assertEqual function

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

//implement eqObjects function
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1).length;     // compare Object.keys
  const key2 = Object.keys(object2).length;
  if (key1 !== key2) {                          // if keys don't match return false
    return false;
  } else {
    for (let i = 0; i < key1.length; i++) {     // for loop to compare option values, return false if no match
      if (key1[i] !== key2[i]) {
        return false;
      }
    }
  }
  return true;                                  // else return true
};

//Implement eqArrays function

const eqArrays = function(arrayOne, arrayTwo) {
  if ((arrayOne.length) !== (arrayTwo.length)) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) === Array.isArray(arrayTwo[i])) {
      return true;
    } else if ((arrayOne[i]) === (arrayTwo[i])) {
      return true;
    }
  }
  return false;
}

//Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);  // =>true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);  // => false
// Test Code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqArrays(cd, cd2), false); // => false  // Test failed - some debugging needed in eqArrays function?