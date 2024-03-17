// url https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (currNum == arr[j]) {
        counter += 1;
      }
    }
    if (isOdd(counter)) {
      return currNum;
    }
  }
  return false;
}

function isOdd(num) {
  return num % 2 === 1 ? true : false;
}
