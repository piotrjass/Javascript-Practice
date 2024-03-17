function scramble(str1, str2) {
  const charCount1 = countChars(str1);
  const charCount2 = countChars(str2);
  console.log(charCount1, charCount2);
  for (const char in charCount2) {
    if (!charCount1[char] || charCount1[char] < charCount2[char]) {
      return false;
    }
  }

  return true;
}

function countChars(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

// oczywiście najkrócej:
function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}
