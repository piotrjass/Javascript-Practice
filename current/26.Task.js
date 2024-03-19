// url https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

var solution = function (firstArray, secondArray) {
  const diffrences = [];
  for (let i = 0; i < firstArray.length; i++) {
    diffrences.push(Math.abs(firstArray[i] - secondArray[i]) ** 2);
  }
  const sum = diffrences.reduce((acc, val) => acc + val, 0);
  return sum / diffrences.length;
};
