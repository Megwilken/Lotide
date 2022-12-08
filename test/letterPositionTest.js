const assert = require('chai').assert;
const letterPosition = require('../letterPosition.js');

describe("#letterPosition", () => {
  it("returns [1] for ('Hello').e", () => {
    assert.deepEqual(letterPosition("Hello").e, [1]);
  });
  it("returns [0] for [('Hello').h", () => {
    assert.deepEqual(letterPosition("Hello").H, [0]);
  });
});