// Maximum sum of n numbers in given arr

function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return console.log("Invalid task");
  // sum of first n numbers in array
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  //   sliding
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    console.log({ tempSum, maxSum });
    maxSum = Math.max(maxSum, tempSum);
  }
  return console.log(
    `Max sum of ${n} consecutive elements in the array [${arr}] equals ${maxSum}`
  );
}

maxSubarraySum([1, 2, 2, 3, 4, 5, 1], 3);
//              +  +  +
//              -  v  v  +
//                 -  v  v  +
