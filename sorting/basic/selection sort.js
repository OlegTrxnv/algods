// Similar to bubble sort, but first placing small values into sorted position at the beginning.
// Runtime complexity O(n^2). Less swaps (only at the end of each loop).
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idxOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idxOfMin]) idxOfMin = j;
      console.log(
        arr,
        `\t${arr[j]} ? ${arr[idxOfMin]} \ti=${i} j=${j} idxOfMin=${idxOfMin} -> ${arr[idxOfMin]}`
      );
    }

    //  swap i and found idxOfMin elements unless i is already in a sorted position
    if (idxOfMin !== i) [arr[i], arr[idxOfMin]] = [arr[idxOfMin], arr[i]];
  }
  return console.log(arr);
}

selectionSort([2, 34, 22, 10, 19]);
