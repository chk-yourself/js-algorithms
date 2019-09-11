/**
 * Returns new array of items contained in given array, in ascending order.
 * Similar to mergeSort in that they both use the concept of divide and conquer. However,
 * while mergeSort recursively splits the array in half and pieces it back together, quickSort
 * recursively divides the array into sorted subarrays at a pivot point, and stitches them back together.
 * O (n^2) quadratic time; O log(n) logarithmic space
 * @param {*} array - The array to sort
 */
export default function quickSort(array) {
  if (array.length < 2) return array;
  const pivot = array.pop(); // you can pick any value in the array as the pivot; remember `pop` removes the last item in a array and returns that item
  const left = [];
  const right = [];

  // see, you're sorting first
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // before piecing them back together
  return [...quickSort(left), pivot, ...quickSort(right)];
}
