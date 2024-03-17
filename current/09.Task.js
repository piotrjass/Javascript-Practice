// url https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
function rot13(str) {
  const res = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = char.charCodeAt(0);

    let shiftedCharCode;
    if (charCode >= 65 && charCode <= 90) {
      // Obsługa wielkich liter
      shiftedCharCode = ((charCode - 65 + 13) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      // Obsługa małych liter
      shiftedCharCode = ((charCode - 97 + 13) % 26) + 97;
    } else {
      // Dla znaków spoza alfabetu, np. spacje lub znaki specjalne
      shiftedCharCode = charCode;
    }

    res.push(String.fromCharCode(shiftedCharCode));
  }
  return res.join("");
}

console.log(rot13("This is my first ROT13 exercise!"));
