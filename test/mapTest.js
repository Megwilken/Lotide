
const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], (word => word[0])), ['g', 'c', 't', 'm', 't']);
  });

  it("returns ['r', 'o', 'o', 'a', 'o'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], (word => word[1])), ['r', 'o', 'o', 'a', 'o']);
  });

  it("returns ['o', 'n', undefined, 'j', 'm' ] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], (word => word[2])), ['o', 'n', undefined, 'j', 'm' ]);
  });
});