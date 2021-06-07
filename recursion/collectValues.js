// Recursion as a helper function (better)
function collectEven(arr) {
  let result = [];

  function helper(helperInput) {
    if (!helperInput.length) {
      return;
    }
    if (helperInput[0] % 2 === 0) {
      result.push(helperInput[0]);
    }
    console.log({ helperInput, result });
    helper(helperInput.slice(1));
  }

  helper(arr);
  return console.log(
    `Array [${result}] consists of even numbers from array [${arr}] `
  );
}
collectEven([1, 2, 3, 4, 5, 6]);

// Pure recursion
function collectOdd(arr) {
  let newArr = [];

  if (!arr.length) {
    console.log("returning newArr [] as a base case");
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  console.log(`newArr before concat [${newArr}]`);
  newArr = newArr.concat(collectOdd(arr.slice(1)));
  console.log(`returning newArr [${newArr}]`);
  return newArr;
}
// console.log(`Odd numbers array is [${collectOdd([1, 2, 3, 4, 5, 6])}]`);

// Pure recursion Option #2
function collectOddValues(arr, result = []) {
  if (!arr.length) {
    return console.log(`Array [${result}] consists of odd numbers.`);
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  console.log({ arr, result });
  return collectOddValues(arr.slice(1), result);
}

// collectOddValues([1, 2, 3, 4, 5, 6]);
