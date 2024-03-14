function LongestWord(sen) {
  // code goes here
  const words = sen.split(" ");

  // TO SŁUŻY DO USUNIĘCIE ZNAKÓW NIE ALFANUMERYCZNYCH
  const cleanedWords = words.map((word) => word.replace(/[^\w\s]/g, ""));
  let max = 0;
  let LongestWord = "";

  for (let i = 0; i < cleanedWords.length; i++) {
    if (cleanedWords[i].length > max) {
      max = cleanedWords[i].length;
      LongestWord = cleanedWords[i];
    }
  }

  return LongestWord;
}

// keep this function call here
