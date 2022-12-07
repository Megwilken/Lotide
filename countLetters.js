const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

// declare countLetters function that takes in a string
const countLetters = function(string) {
//define empty variable to store result
  const result = {};
  //for... of loop to loop over characters of string
  for (let letters of string) {
    //increment counter - if letter exists add it to tally
    if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};
//TEST CODE
console.log(countLetters("LHL"));
console.log(countLetters("Hi. Hello. How Are You?"));
console.log(countLetters("Lighthouse Labs"));

module.exports = countLetters;