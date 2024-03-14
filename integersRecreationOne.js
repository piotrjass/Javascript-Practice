function listSquared(m, n) {
  function getDivisorsSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        sum += i * i;
      }
    }
    return sum;
  }

  const result = [];

  for (let i = m; i <= n; i++) {
    const divisorsSum = getDivisorsSum(i);
    const squareRoot = Math.sqrt(divisorsSum);
    if (Number.isInteger(squareRoot)) {
      result.push([i, divisorsSum]);
    }
  }

  return result;
}
