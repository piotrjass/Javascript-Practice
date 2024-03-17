function zeros(n) {
  let count = 0;

  // ilosc zer na koncu w silni zalezy od ilosci 2 i 5!
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}

// albo

function zeros(n) {
  let divider = 1;
  let sum = 0;

  while (divider <= n) {
    sum = Math.floor(sum + n / (divider *= 5));
  }
  return sum;
}
