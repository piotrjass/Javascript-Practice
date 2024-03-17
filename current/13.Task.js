// url https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
function maxSequence(nums) {
  // zapisz do zmiennej currSum i maxSum
  let currSum = 0;
  let maxSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // wybiersz wieksza wartosc z zera i obecnej sumy
    currSum = Math.max(0, currSum);
    // dodaj do current sumy wartosc
    currSum += nums[i];
    // wybiersz wieksza wartosc z dwoch sum
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
