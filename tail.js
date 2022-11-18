const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  return array.slice(1);
};
// TEST CODE
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([1,2,3], [1,2,3]));