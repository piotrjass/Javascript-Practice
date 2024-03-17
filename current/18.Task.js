// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  arr = string.split(" ");
  const result = [];
  for (el of arr) {
    if (el.length >= 5) {
      result.push(reverseTheString(el));
    } else {
      result.push(el);
    }
  }
  return result.join(" ");
}

function reverseTheString(str) {
  return str.split("").reverse().join("");
}
