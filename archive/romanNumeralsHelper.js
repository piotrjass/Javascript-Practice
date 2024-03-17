function toRoman(value) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";

  for (const key in map) {
    while (value >= map[key]) {
      roman += key;
      value -= map[key];
    }
  }

  return roman;
}

console.log(toRoman(14));

// Następny wpis to 'L', ale 14 nie jest większe lub równe 50, więc przechodzimy dalej.
// Kolejny wpis to 'XL', ale 14 nie jest większe lub równe 40, więc przechodzimy dalej.
// Następny wpis to 'X', a 14 jest większe lub równe 10, więc dodajemy 'X' do wynikowej liczby rzymskiej (roman) i odejmujemy 10 od value. Teraz value wynosi 14 - 10 = 4, a roman zawiera 'X'.
// Kolejny wpis to 'IX', ale 4 nie jest większe lub równe 9, więc przechodzimy dalej.
// Następny wpis to 'V', ale 4 nie jest większe lub równe 5, więc przechodzimy dalej.
// Ostatni wpis to 'IV',  4 jest większe lub równe 4, więc przechodzimy dalej.
// Pętla for...in nie ma już innych wpisów do przejścia, więc wychodzimy z pętli.
// Wynikowa liczba rzymska to 'XIV', co jest poprawną reprezentacją liczby 14 w systemie rzymskim.
