var maxSequence = function (arr) {
  const allPositive = arr.every((element) => element > 0);
  if (allPositive) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
  const allNegative = arr.every((element) => element < 0);
  if (allNegative) {
    return Math.max(...arr);
  }

  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log(maxSequence([1, 2, 3, 4]));
console.log(maxSequence([-1, -2, -3, -4]));
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// dodajemy do siebie wszystkie elementy i zapisujemy najwieksza wartosc
krócej: function maxSequence(nums) {
  let currSum = 0;
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(0, currSum);
    currSum += nums[i];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
