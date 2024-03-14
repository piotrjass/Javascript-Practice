Examples;
pigIt("Pig latin is cool"); // igPay atinlay siay oolcay
pigIt("Hello world !"); // elloHay orldway !

function pigIt(str) {
  let result = [];
  str.split(" ").map((el) => result.push(el.slice(1) + el[0] + "ay"));
  return result.join(" ");
}
// oczywiście regex:
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

// Wyrażenie regularne /(\w)(\w*)(\s|$)/g dzieli zdanie na trzy grupy:

// (\w): Pierwsza grupa przechwytuje pierwszą literę słowa.
// (\w*): Druga grupa przechwytuje resztę słowa (wszystkie litery poza pierwszą).
// (\s|$): Trzecia grupa przechwytuje spację lub koniec zdania.
// Metoda replace() zastępuje dopasowane słowo przez kombinację tych grup, przekształcając je zgodnie z zasadami. "\$2\$1ay\$3" oznacza:

// \$2: Druga grupa (reszta słowa).
// \$1: Pierwsza grupa (pierwsza litera słowa).
// "ay": Litera "ay".
// \$3: Trzecia grupa (spacja lub koniec zdania).

albo;

function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}
