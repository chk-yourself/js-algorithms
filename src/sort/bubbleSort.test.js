import bubbleSort from './bubbleSort';

describe('Bubble sort', () => {
  it('returns a new array of items, rearranged in ascending order', () => {
    expect(bubbleSort([4, 1, 5, 2, 3])).toEqual([1, 2, 3, 4, 5]);
  });
});
