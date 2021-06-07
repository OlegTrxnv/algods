// Runtime complexity O(n^2).
// Effective only on nearly sorted array. Good for situations when new data comes all the time.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let j = i - 1;

    // keep shoving arr[j] to arr[j+1] if it's more than currVal
    // moving small values to sorted position
    while (arr[j] > currVal && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
      console.log(arr, "while looped");
    }
    // now after all the j-- we can shove currVal itself to sorted position at the beginning of arr
    arr[j + 1] = currVal;

    console.log(arr, "for looped");
  }
  return console.log(`Sorted: ${arr}`);
}
insertionSort([9, 3, 6, 2, 1]);

// // Another implementation with both for loops
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currVal = arr[i];

//     for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
//       arr[j + 1] = arr[j];
//       arr[j] = currVal;
//       console.log(arr, i, j, currVal, arr[j + 1]);
//     }
//   }
//   return console.log(arr);
// }
