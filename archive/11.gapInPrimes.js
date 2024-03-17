function gap(g, m, n) {
  let primes = [];
  let result = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      if (primes[j] - primes[i] === g) {
        result.push(primes[i]);
        result.push(primes[j]);
      }
    }
  }
  if (result.length > 0) {
    return [result[0], result[1]];
  } else return null;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

// albo
function gap(g, m, n) {
  let primes = [];
  let result = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  for (let i = 0; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      if (primes[j] - primes[i] === g) {
        result.push(primes[i]);
        result.push(primes[j]);
      }
    }
  }
  console.log(primes);
  if (result.length > 0) {
    return [result[0], result[1]];
  } else return nil;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= number; divisor++) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

// najkrocej
function gap(g, m, n) {
  var lastPrime = 0;
  var isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };

  for (var i = m; i <= n; i++)
    if (isPrime(i)) {
      if (i - lastPrime == g) return [lastPrime, i];
      else lastPrime = i;
    }

  return null;
}
