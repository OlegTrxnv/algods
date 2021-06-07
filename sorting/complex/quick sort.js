// Runtime complexity O(n * log n), space complexity O(log n)
// Worst time complexity is O(n^2) when we are pivoting
// around wrong elements (min or max), i.e. sorted arr

// Pivot (or partition) helper function
// receives arr, takes first element (pivot)
// and puts all smaller items to the left and all the bigger to the right
// and returns new index of pivot
function arrayPivot(arr, startIdx, endIdx) {
  // Pivot is the first element of the arr
  let swapIdx = startIdx;
  let pivot = arr[startIdx];

  // Start swapping, pivot arr[0] with the nex el arr[1]
  for (let i = startIdx + 1; i <= endIdx; i++) {
    if (arr[i] < pivot) {
      // swapIdx will eventually represent a sorted position of pivot
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }

  // Swap the pivot from the startIdx to sorted position swapIdx
  [arr[startIdx], arr[swapIdx]] = [arr[swapIdx], arr[startIdx]];
  return swapIdx;
}

// recursive sorting function itself
function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
  // base recursive case if leftIdx = rightIdx, it is the same element
  // and we are done going deeper
  if (leftIdx < rightIdx) {
    let pivotIdx = arrayPivot(arr, leftIdx, rightIdx);
    // left side
    quickSort(arr, leftIdx, pivotIdx - 1);
    // right side
    quickSort(arr, pivotIdx + 1, rightIdx);
  }
  console.log(arr);
  return arr;
}

//         p
quickSort([3, 5, 1, 2, 4]);
//            i
