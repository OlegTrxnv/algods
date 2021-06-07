// Runtime complexity O(n * log n), space complexity O(n)

// Merge helper function
// merging two sorted arrays arr1, arr2 into sorted array results
function arrayMerge(arr1, arr2) {
  let results = [];
  let i = 0; // arr1 indices
  let j = 0; // arr2 indices

  // all the arr length keep comparing and pushing min el to results
  while (arr1.length > i && arr2.length > j) {
    // if arr1[i] <= arr2[j] push it to results
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
      //  if arr2[j] < arr1[i] push it to results instead
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //  when shorter arr is exhausted push the the rest of the other arr to results
  while (arr1.length > i) {
    results.push(arr1[i]);
    i++;
  }
  while (arr2.length > j) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}
// recursive sorting function itself
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let centerIdx = Math.floor(arr.length / 2);
  let leftHalfArr = arr.slice(0, centerIdx);
  let rightHalfArr = arr.slice(centerIdx);

  return arrayMerge(mergeSort(leftHalfArr), mergeSort(rightHalfArr));
}

const myArr = [10, 3, 1, 5];
console.log(mergeSort(myArr));

// // Another implementation of arrayMerge function

// function arrayMerge(arr1, arr2) {
//   const results = [];

//   while (arr1.length && arr2.length) {
//     if (arr1[0] <= arr2[0]) {
//       results.push(arr1.shift());
//     } else {
//       results.push(arr2.shift());
//     }
//   }

//   return [...results, ...arr1, ...arr2];
// }
