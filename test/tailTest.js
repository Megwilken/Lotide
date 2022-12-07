const tail = require('../tail.js');
const assertEqual = require('../assertEqual.js');

// TEST CODE
assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([1,2,3]), [1,2,3]);