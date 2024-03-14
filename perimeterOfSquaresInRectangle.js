function perimeter(n) {
  n = n + 1;
  const squresSides = [];
  for (let i = 1; i <= n; i++) {
    squresSides.push(fib(i));
  }
  return squresSides.reduce((acc, val) => acc + val, 0) * 4;
}

function fib(n) {
  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence[n];
}
