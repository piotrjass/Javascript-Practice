function rowSumOddNumbers(n) {
  //  TO JEST PIERWSZA LICZBA W RZĘDZIE
  let startNumber = n * (n - 1) + 1;
  let rowArr = [startNumber];
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    rowArr.push(rowArr[i] + 2);
  }
  console.log(rowArr);
  for (let i = 0; i < rowArr.length; i++) {
    sum += rowArr[i];
  }
  return sum;
  // pierwsza liczbe w rzedzie to n(n-1) + 1
  // return return n * n *n tez dziala
}

// lub po prostu

return N * N * N;
