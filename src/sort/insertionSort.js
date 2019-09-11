/* eslint-disable no-param-reassign */
/**
 * Sorts items in place and returns the newly sorted array by dividing the array
 * into two sections: "sorted" vs "unsorted"
 * Think how might sort a set of cards that are facedown from low to high in the following way:
 * You start with the first 2 cards, sort them, and then keep going through the
 * rest of the unsorted cards, one by one, finding the right place for each card in the sorted pile,
 * until they are all in the correct order.
 * Ideally, you wouldn't have to check every item in the sorted section to know where to position
 * the current item, just until you reach the first lower or higher value, depending on the direction.
 * O(n^2) quadratic time; O(1) constant space
 * Inefficient, but in practice, usually performs better than other quadratic sorting algos, such as
 * Bubble sort and Selection sort; Best for small inputs
 * @param {*} array - The array to sort
 */
export default function insertionSort(array) {
  // Loop through array, starting with second item (index 1)
  for (let i = 1; i < array.length; i++) {
    const value = array[i];

    // Loop through sorted array (previous items from current to beginning),
    // shifting the current value back towards the first index until it reaches a smaller value
    for (let j = i - 1; j >= 0 && array[j] > value; j--) {
      array[j + 1] = array[j];
    }
    // Keep comparing the current value to the one before it,
    // shifting it to the left towards the beginning of the array
    // until you reach the end or a smaller value
    array[j + 1] = value;
  }
  return array;
}
