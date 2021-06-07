//  First placing large values into sorted position at the end
//  Runtime complexity O(n^2). Many many swaps. Effective only on nearly sorted array.

function bubbleSort(arr) {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    //  restrict window to (arr.length - i) because i elements are at sorted position already
    //  restrict window -1 to prevent breaking out arr.length (only when i=0 first outer loop basically)
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(`[${arr}] \t${arr[j]} ? ${arr[j + 1]} \tj=${j} i=${i}`);
      if (arr[j] > arr[j + 1]) {
        // swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    //  nearly sorted array short circuit
    if (noSwaps) break;
  }
  return console.log(`Sorted: [${arr}]`);
}

bubbleSort([1, 10, 5, 7, 3, 8]);

// //           Option #2 for loops conditions
// // start looping from arr end towards beginning to use i for j=i-1 on inner loop
// //  (last element is already sorted)
// function bubbleSort(arr) {
//   let noSwaps;
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(`[${arr}] \t${arr[j]} ? ${arr[j + 1]} \tj=${j} i=${i}`);
//       if (arr[j] > arr[j + 1]) {
//         // swap elements
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         noSwaps = false;
//       }
//     }
//     //  nearly sorted array short circuit
//     if (noSwaps) break;
//   }
//   return console.log(`Sorted: [${arr}]`);
// }
