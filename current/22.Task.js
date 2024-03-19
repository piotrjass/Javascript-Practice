// url https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

function alphanumeric(string) {
  // Sprawdzenie czy łańcuch nie jest pusty
  if (string.length === 0) {
    return false;
  }

  // Sprawdzenie czy wszystkie znaki w łańcuchu są alfanumeryczne
  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);
    // Jeśli znak nie jest alfanumeryczny, zwracamy false
    if (
      !(
        (charCode >= 48 && charCode <= 57) || // Digits 0-9
        (charCode >= 65 && charCode <= 90) || // Uppercase letters A-Z
        (charCode >= 97 && charCode <= 122)
      )
    ) {
      // Lowercase letters a-z
      return false;
    }
  }

  // Jeśli przejdziemy przez pętlę, oznacza to, że wszystkie znaki są alfanumeryczne
  return true;
}

// albo regexem

let alphanumeric = (s) => /^[a-z\d]+$/i.test(s);

function alphanumeric(string) {
  return /^[0-9a-z]+$/i.test(string);
}
