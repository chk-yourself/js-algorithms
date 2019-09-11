/**
 * Returns a new array containing all items from the given arrays, sorted in ascending order.
 * @param {Array} left - A single-item array or array of items in ascending order
 * @param {Array} right - A single-item array or array of items in ascending order
 */
export const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    // Keep comparing the items at the top of the stacks, pushing the smaller value of the two
    // to the results array at every iteration
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  while (left.length) {
    results.push(left.shift());
  }

  while (right.length) {
    results.push(right.shift());
  }
  return results;
};

/**
 * Sorts items in given array, using the concept of divide and conquer.
 * Recursively divides the given array into single-unit arrays, and then iteratively
 * pieces them back together in the right order
 * @param {*} array - The array to sort
 * O n(log(n)) linearithmic time; O(n) space
 * Efficient
 */
export default function mergeSort(array) {
  if (array.length < 2) return array; // base case required to avoid infinite recursion
  // copy halves of the array
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively splits, sorts, and combines contents of array
  return merge(mergeSort(left), mergeSort(right));
}
