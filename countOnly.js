// assertEqual code
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Declare count only fuction
const countOnly = function(allItems, itemsToCount) {
// define empty variable
  const results = {};
  // create for loop that will loop over all items of array
  for (const item of allItems) {
    console.log(item);
    // if condition to only increment count in results if the item is found in the itemsToCount object
    if (itemsToCount[item]) {
      // increment counter for each item, set a property value that was already there (or zero if nothing there) with 1 added to it
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;