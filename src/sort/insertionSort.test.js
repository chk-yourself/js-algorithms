import insertionSort from './insertionSort';

describe('Insertion sort', () => {
  it('returns a new array of items, rearranged in ascending order', () => {
    expect(insertionSort([4, 1, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  });
});
