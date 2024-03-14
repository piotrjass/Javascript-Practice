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

// lub po prostu
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
