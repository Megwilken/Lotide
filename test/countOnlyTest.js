const assert = require('chai').assert;
const countOnly = require('../countOnly.js');

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

const result1 = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false};

describe("#countOnly", () => {
  it("returns 1 for 'Jason'", () => {
    assert.equal(countOnly(firstNames, result1)["Jason"], 1);
  });

  it("returns 2 for 'Fang'", () => {
    assert.equal(countOnly(firstNames, result1)["Fang"], 2);
  });

  it("returns undefined for 'Karima'", () => {
    assert.equal(countOnly(firstNames, result1)["Karima"], undefined);
  });

  it("returns undefined for 'Agouhanna'", () => {
    assert.equal(countOnly(firstNames, result1)["Agouhanna"], undefined);
  });
});