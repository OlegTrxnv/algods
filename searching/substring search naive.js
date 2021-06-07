// Naive string search
// O(n * m) runtime complexity.

function naiveSearch(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(
        `str[i(${i}) + j(${j})] = ${str[i + j]}  ?  pattern[j(${j})] = ${
          pattern[j]
        }`
      );

      if (str[i + j] !== pattern[j]) {
        console.log("Break");
        break;
      }

      if (j === pattern.length - 1) {
        console.log("Match!");
        count++;
      }
    }
  }
  return console.log(`${count} match(es) found`);
}

naiveSearch("lorie loled", "lol");
