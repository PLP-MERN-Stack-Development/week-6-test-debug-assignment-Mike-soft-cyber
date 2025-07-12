const sum = require('../../src/utils/sum');

describe('sum function', () => {
  it('returns correct sum', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
