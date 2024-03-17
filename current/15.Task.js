// url https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str) {
  const words = str.split(/[\s-_]+/);
  if (words.length === 0) {
    return "";
  }
  let camelCaseString = words[0];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const camelWord =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    camelCaseString += camelWord;
  }
  return camelCaseString;
}

// albo tak to najlepiej

function toCamelCase(str) {
  let arr = str.split("");
  for (i = 0; i < arr.length; i++) {
    let letter = arr[i];
    if (letter == "_" || letter == "-") {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = "";
    }
  }
  return arr.join("");
}

// moje
function toCamelCase(str) {
  const isFirstLetterUpper = isUpper(str[0]);
  const result = [];

  if (isFirstLetterUpper) {
    result.push(str[0].toLowerCase()); // Pierwszą literę zmieniamy na małą
  }

  let capitalizeNext = false;

  for (let i = 1; i < str.length; i++) {
    const currentLetter = str[i];

    if (isLetter(currentLetter)) {
      if (capitalizeNext) {
        result.push(currentLetter.toUpperCase()); // Jeśli trzeba, zmieniamy literę na dużą
        capitalizeNext = false;
      } else {
        result.push(currentLetter.toLowerCase()); // W przeciwnym razie litera pozostaje mała
      }
    } else {
      capitalizeNext = true; // Znak inny niż litera, więc następna litera powinna być duża
    }
  }

  return result.join("");
}

function isUpper(char) {
  return char === char.toUpperCase();
}

function isLetter(char) {
  const code = char.toLowerCase().charCodeAt(0);
  return code >= 97 && code <= 122;
}

console.log(toCamelCase("The-warrior")); // Output: theWarrior
