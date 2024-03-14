function removeNb(n) {
  let sum = 0;
  const results = [];
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      product = j * k;
      sum2 = sum - j - k;
      if (sum2 === product) {
        return [j, k];
      }
    }
  }
}

// albo sumę można obliczyć:
// sum = (n * (n + 1)) / 2

function removNb(n) {
  const sum = (n * (n + 1)) / 2; // Oblicz suma wszystkich liczb od 1 do n
  const results = [];

  for (let a = 1; a <= n; a++) {
    const b = (sum - a) / (a + 1);
    if (b % 1 === 0 && b <= n) {
      results.push([a, b]);
    }
  }

  return results;
}

// króciutko:

function removeNb(n) {
  var sum = (n * (n + 1)) / 2;
  var result = [];
  for (var a = 1; a < n; a++) {
    if ((sum - a) % (a + 1) === 0) {
      var b = (sum - a) / (a + 1);
      if (b < n) result.push([a, b]);
    }
  }
  return result;
}
