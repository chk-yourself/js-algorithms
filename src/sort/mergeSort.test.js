import mergeSort from './mergeSort';

describe('Merge sort', () => {
  it('returns a new array of items, rearranged in ascending order', () => {
    expect(mergeSort([4, 1, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  });
});
