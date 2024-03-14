function topThreeWords(text) {
  // Tworzymy wyrażenie regularne do wyodrębnienia słów
  const regex = /[a-zA-Z]+/g;
  const filtered = text.match(regex);

  if (!filtered) {
    return []; // Zabezpieczenie przed brakiem dopasowań
  }

  // Tworzymy tablicę słów
  const words = [];

  for (let i = 0; i < filtered.length; i++) {
    const word = filtered[i];
    words.push(word);
  }

  // Tworzymy tablicę unikalnych słów
  const uniqueWords = [...new Set(words)];

  // Sortujemy unikalne słowa w oparciu o liczbę wystąpień (od największej do najmniejszej)
  uniqueWords.sort((a, b) => {
    const countA = words.filter((word) => word === a).length;
    const countB = words.filter((word) => word === b).length;
    return countB - countA;
  });

  // Wybieramy trzy najczęściej występujące słowa
  const topThree = uniqueWords.slice(0, 3);

  return topThree;
}
