const assert = require('chai').assert;
const tail = require('../tail');
const words= (["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});