function alphabetPosition(text) {
  const matchResult = text.toUpperCase().match(/[a-z]/gi);
  if (matchResult === null) {
    return ""; // Jeśli nie znaleziono pasujących znaków, zwróć pusty ciąg
  }
  return matchResult.map((char) => char.charCodeAt() - 64).join(" ");
}
