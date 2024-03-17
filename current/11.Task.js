// url https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  // multiply the digits of the number
  if (num < 10) {
    return 0;
  }
  let res = multiply(num);
  let couter = 1;
  // check if the result of multiplication is single digits
  while (res >= 10) {
    couter += 1;
    res = multiply(res);
  }
  return couter;
  // if the res is single digits, return
}

function multiply(num) {
  const numAsString = String(num);
  let res = 1;
  for (char of numAsString) {
    res *= Number(char);
  }
  return res;
}

// albo
