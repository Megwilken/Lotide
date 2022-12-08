const assert = require('chai').assert;
const countLetters = require('../countLetters.js');

describe("#countLetters", () => {
  it("returns 3 for ('LHL')", () => {
    assert.deepEqual(countLetters('LHL'), 3);
  });
  it("returns 15 for ('Lighthouse Labs')", () => {
    assert.deepEqual(countLetters('Lighthouse Labs'), 15);
  });
});