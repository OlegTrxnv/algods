//  Dynamic programming works if:
// - problem can be splitted to overlapping sub problems
// - problem has optimal structure

// Memoization, top to bottom approach. Recursive. Calculated entries are stored in array not to repeat calculations.
function fibMemo(n, memo = []) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  return (memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
}

console.log(fibMemo(10));

// Tabulation, bottom up approach. Iterative. Better space complexity.

function fibTab(n) {
  if (n <= 2) return 1;
  const result = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
}

console.log(fibTab(10));
