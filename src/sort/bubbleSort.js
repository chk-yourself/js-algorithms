/**
 * Returns a new array of the same items, rearranged in ascending order
 * Loops through given array, comparing each pair of adjacent items, and
 * swapping them if they are in the wrong order, until
 * the largest values "bubble up" to the right of the array, in correct ascending order
 * O(n^2) quadratic time; O(1) constant space
 * DON'T USE. Most inefficient; slightly worse than Insertion Sort;
 * Best for small inputs and pre-sorted lists
 * @param {*} array - The given array to sort
 */
export default function bubbleSort(array) {
  let swapped;

  do {
    swapped = false;
    // max index = second-to-last index, bc we're looking at adjacent pairs
    for (let i = 0; i < array.length - 1; i++) {
      // If the current value is greater than the next value...
      if (array[i] > array[i + 1]) {
        /**
         * ...swap positions via ES6 array destructuring
         * If the array destructuring looks weird or is tripping you out, remember it's just
         * a `syntax` for variable assignment. You're not actually swapping the items in the
         * array in place, but their assigned values. `array[i]` and `array[i + 1]` are simply
         * variables you are reassigning to different values.
         * ex)
         * let [a, b] = [1, 2];
         * console.log(a); // expected output: 1
         * let [c, d] = [a, b];
         * console.log(c); // expected output: 1
         */
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
  // If nothing needs to be swapped, return the newly sorted array
  return array;
}
