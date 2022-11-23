const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// declare countLetters function
const countLetters = function(string){
//define empty variable
const result = {};
//for... of loop
for (const letters of string) {
  console.log(letters);
}
}
//TEST CODE
console.log(countLetters("LHL"));