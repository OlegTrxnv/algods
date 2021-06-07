// Count how many unique values given arr contains
// Works for sorted arrays!

function countUniqueValues(arr) {
  if (!arr.length) {
    return console.log("Empty array");
  }
  console.log(`Original array: ${arr}`);
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    }
    console.log({ left, right });
  }
  return console.log(
    `Array is modified: ${arr} and it contains ${left + 1} unique numbers`
  );
}

//                 l
//                 e
//                 f
//                 t
countUniqueValues([1, 2, 2, 3, 3, 4, 5, 6]);
//                    r
//                    i
//                    g
//                    h
//                    t
