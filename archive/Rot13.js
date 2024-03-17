function rot13(msg) {
  const shiftedMsg = [...msg]
    .map((char) => {
      const asciiCode = char.charCodeAt(0);
      let shiftedAsciiCode = asciiCode;

      if (
        (asciiCode >= 65 && asciiCode <= 90) ||
        (asciiCode >= 97 && asciiCode <= 122)
      ) {
        // Dla liter alfabetu (A-Z lub a-z) przekształcamy kod ASCII
        if (
          (asciiCode >= 65 && asciiCode <= 77) ||
          (asciiCode >= 97 && asciiCode <= 109)
        ) {
          shiftedAsciiCode += 13;
        } else {
          shiftedAsciiCode -= 13;
        }
      }

      return String.fromCharCode(shiftedAsciiCode);
    })
    .join("");

  return shiftedMsg;
}

// (asciiCode >= 65 && asciiCode <= 77): To sprawdza, czy kod ASCII asciiCode odpowiada literom alfabetu od "A" (65) do "M" (77). Jeśli tak, to przesuwamy kod o 13 miejsc w górę, co oznacza, że przesuniemy go na literę od "N" do "Z".

// (asciiCode >= 97 && asciiCode <= 109): To sprawdza, czy kod ASCII asciiCode odpowiada literom alfabetu od "a" (97) do "m" (109). Jeśli tak, to również przesuwamy kod o 13 miejsc w górę, co oznacza, że przesuniemy go na literę od "n" do "z".

// W przypadku liter poza wymienionymi przedziałami, czyli liter "N" do "Z" oraz "n" do "z", wykonujemy przesunięcie w drugą stronę, tj. odejmujemy 13 od kodu ASCII, aby powrócić do pierwotnych liter od "A" do "M" lub "a" do "m".

// lub

function rot13(str) {
  return str.replace(/[a-z]/gi, function (x) {
    return String.fromCharCode(
      x.charCodeAt(0) + (x.toLowerCase() <= "m" ? 13 : -13)
    );
  });
}

// lub
function rot13(str) {
  return str
    .split("")
    .map(function (e) {
      return /[A-Ma-m]/.test(e)
        ? String.fromCharCode(e.charCodeAt(0) + 13)
        : /[N-Zn-z]/.test(e)
        ? String.fromCharCode(e.charCodeAt(0) - 13)
        : e;
    })
    .join("");
}
