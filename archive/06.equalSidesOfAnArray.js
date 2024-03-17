function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    // Oblicz sumę elementów po lewej stronie indeksu i
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }

    // Oblicz sumę elementów po prawej stronie indeksu i
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    // Sprawdź, czy lewa i prawa suma są równe
    if (leftSum === rightSum) {
      console.log(`Indeks równowagi znaleziony: ${i}`);
      return i;
    }
  }

  console.log("Indeks równowagi nie znaleziony");
  return -1; // Jeśli nie znaleziono indeksu równowagi
}

// lub to

function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((s, n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}
