function moveZeros(arr) {
  const zeros = arr.filter((el) => el === 0);
  const nonZeros = arr.filter((el) => el !== 0);
  return [...nonZeros, ...zeros];
}

albo;

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num) {
    return num !== 0;
  });
  var zeroList = arr.filter(function (num) {
    return num === 0;
  });
  return filtedList.concat(zeroList);
};
