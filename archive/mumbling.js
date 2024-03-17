// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase(); // Dodaj dużą literę
    for (let j = 0; j < i; j++) {
      result += s[i].toLowerCase(); // Dodaj małe litery zgodnie z indeksem
    }
    if (i < s.length - 1) {
      result += "-"; // Dodaj myślnik, jeśli nie jest to ostatnia litera
    }
  }

  return result;
}
// lub po prostu

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
