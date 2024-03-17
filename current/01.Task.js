// url https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  let totalSum = arr.reduce((acc, curr) => acc + curr, 0); // Oblicz całkowitą sumę wszystkich elementów tablicy
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i]; // Od całkowitej sumy odejmujemy bieżący element, aby uzyskać sumę elementów po prawej stronie

    if (leftSum === totalSum) {
      return i; // Jeśli sumy po lewej i po prawej stronie są równe, zwracamy indeks
    }

    leftSum += arr[i]; // Dodajemy bieżący element do sumy po lewej stronie w przygotowaniu do kolejnej iteracji
  }

  return -1; // Jeśli nie ma równowagi, zwracamy -1
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // Przykładowe użycie
