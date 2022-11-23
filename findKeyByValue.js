const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);


// implement a function that scans the object (object = bestTVShowsByGenre), and returns the first
// key (key = genres) that contain's the given value (value = show names)

//Object
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
// Implement findKeyByValue function
const findKeyByValue = function(object, value) {
// Object.keys function to search through the object keys
  const key = Object.keys(object);
  // for of loop that loops over what was returned by Object.keys - trying to return show not genre
  for (const results of key) {
    if (object[results] === value)
    // return statement
      return results;
  }
};
// // TEST CODE
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  
