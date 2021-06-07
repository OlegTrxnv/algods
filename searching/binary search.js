// Works on sorted array!
// Runtime complexity O(log n)

function binarySearch(arr, data) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  //the loop will stop on finding matching data &&
  // if data is not present in arr (the start will get +1 and break out arr.length)
  while (arr[middle] !== data && start <= end) {
    console.log({ start, middle, end });
    if (data < arr[middle]) {
      //  it is -1 because middle is checked already
      end = middle - 1;
    } else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  // done, now check if the data was found or not (while loop stopped)
  return arr[middle] === data ? console.log(middle) : console.log("not found");
}

binarySearch([1, 4, 8, 15, 20, 25, 30, 35, 40, 45], 15);
