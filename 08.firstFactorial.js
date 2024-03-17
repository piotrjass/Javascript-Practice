function factorial(n) {
  // Warunek zakończenia rekurencji: 0! = 1! = 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Rekurencyjne wywołanie funkcji dla n-1
    return n * factorial(n - 1);
  }
}

// albo
function FirstFactorial(num) {
  // code goes here

  var start = 1;
  for (let i = 1; i <= num; i++) {
    start = start * i;
  }

  return start;
}

// keep this function call here
console.log(FirstFactorial(readline()));
