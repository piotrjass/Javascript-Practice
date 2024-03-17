// url https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (x) {
  let unique = [];
  if (x.length > 0) {
    unique.push(x[0]);
  }
  for (let i = 1; i < x.length; i++) {
    if (x[i] !== x[i - 1]) {
      unique.push(x[i]);
    }
  }
  return unique;
};

// a gdyby trzeba bylo tylko unikalne
var uniqueInOrder = function (iterable) {
  let uniques = new Set();
  for (let i = 0; i < iterable.length; i++) {
    uniques.add(iterable[i]);
  }
  let myArray = [...uniques];
  return myArray;
};
