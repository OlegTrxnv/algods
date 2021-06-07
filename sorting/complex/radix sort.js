// Runtime complexity O(n * k), space complexity O(n + k)
// Works only for numbers

// Helper function to get digit by i. Last digit is i=0.
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper function to calculate how many digits a num consists of
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to count tha max digit length of sorting nums
function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

// sorting function itself
// works only for positive numbers
function radixSort(nums) {
  // obviously k represents highest numerical rank of comparing nums
  for (let k = 0; k < mostDigits(nums); k++) {
    //   create array consisting of 10 elements (bucket 0, 1 , 2 ...9), make each one an empty subarray
    let buckets = Array.from({ length: 10 }, (bucket) => []);

    //  fill the buckets with appropriate nums for this k
    for (let num of nums) {
      // get digit of num at numerical rank k
      let digit = getDigit(num, k);
      // every bucket inside buckets is arranged and filled by its array index 0...9 coming from digit
      buckets[digit].push(num);

      console.log(digit, buckets[digit], num);
    }
    // every bucket is actual array, pull all nums individually and stick in []
    // update nums with that data for the next k-th iteration
    nums = [].concat(...buckets);
    console.log(nums);
  }
  return nums;
}

radixSort([45, 0, 5, 9945, 8, 10, 100, 9]);
