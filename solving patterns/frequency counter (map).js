// Check if given string is a valid anagram

function isValidAnagram(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return console.log(
      `'${stringTwo}' is NOT a valid anagram of '${stringOne}'`
    );
  }
  // lookup{} is a map of elements from stringOne
  const lookup = {};

  for (let letter of stringOne) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }
  console.log(lookup);

  // exhausting letters from lookup{} by letters from stringTwo
  for (let letter of stringTwo) {
    if (!lookup[letter]) {
      return console.log(
        `'${stringTwo}' is NOT a valid anagram of '${stringOne}'`
      );
    } else {
      lookup[letter] -= 1;
    }
  }
  return console.log(`'${stringTwo}' is a valid anagram of '${stringOne}'`);
}

isValidAnagram("cinema", "iceman");
isValidAnagram("hello", "hloee");
isValidAnagram("123456", "12345");
