function productFib(prod) {
  let prev = 0;
  let curr = 1;
  while (prev * curr < prod) {
    // tutaj sa liczby ciagu fibonacciego, w sensie jedna jest suma dwoch kolejnych
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return [prev, curr, prev * curr === prod];
}

function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

console.log(productFib(714));
