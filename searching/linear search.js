// It is not as bad as it sounds. O(n) runtime complexity.
// It is built in: indexOf, includes, find, fundIndex

function linearSearch(arr, data) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === data) return i;
  }
  return -1;
}
