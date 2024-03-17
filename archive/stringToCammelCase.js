function toCamelCase(str) {
  //   TEN REGEX DOPASOWUJE WSZYSTKIE ZNAKI BIAŁE JAK SPACJA LUB TABULATOR,
  // POZA TYM MYŚLNIK I PODŁOGA

  const words = str.split(/[\s- _ ]+/);

  //   TĄ ZMIENNĄ MOŻNA ZASTĄPIĆ RÓWNIEŻ FUNKCJĄ MATCH i użyć zaprzeczenia w regexie

  // const wordsMatch = str.match(/[^\s\-_]+/g);

  // i wtedy
  const str = "Hello - world_ this is a test";
  const wordsMatch = str.match(/[^\s\-_]+/g);
  console.log(wordsMatch);

  // Wyświetli: ['Hello', 'world', 'this', 'is', 'a', 'test']

  if (words.length === 0) {
    return "";
  }
  let camelCaseString = words[0];
  for (let i = 1; i < words.length; i++) {
    //   ITERMUJMY PO WSZYSTKICH ELEMENTACH, ŻEBY BYŁO WYGODNIEJ ZAPISUJEMY OBECNY ELEMENT DO ZMIENNEJ WORD

    const word = words[i];
    charAt(0);

    // pobiera pierwszą literę
    // toUpperCase i toLowerCase zmieniają na dużą i małą literę, a slice(1) pobiera resztę słowa zaczynając od 2 znaku

    const camelWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    camelCaseString += camelWord;
  }
  return camelCaseString;
}

const words = str.split(/[\s-_]+/);

// inne rozwiazania
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
