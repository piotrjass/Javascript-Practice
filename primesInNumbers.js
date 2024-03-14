function primeFactors(n) {
  primes = [];
  for (let i = 2; i <= n; i++) {
    while (isPrime(i) && n % i === 0) {
      console.log(n);
      primes.push(i);
      n /= i;
    }
  }
  const counts = primes.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
  }, {});

  const result = Object.entries(counts)
    .map(([factor, count]) => {
      if (count === 1) {
        return `(${factor})`;
      } else {
        return `(${factor}**${count})`;
      }
    })
    .join("");

  return result;
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
