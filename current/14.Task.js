// url https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
// url https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript

// najlepiej

function rgb(r, g, b) {
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function toHex(num) {
  return Math.max(0, Math.min(255, num)).toString(16).padStart(2, "0");
}

//

function rgb(r, g, b) {
  return convertToRGB(r) + convertToRGB(g) + convertToRGB(b);
}

const convertToRGB = (rgbVal) => {
  if (rgbVal <= 0) return "00";
  if (rgbVal >= 255) return "FF";

  firstHex = parseInt(rgbVal / 16);
  secondHex = (rgbVal / 16 - firstHex) * 16;

  return getHexValue(firstHex) + getHexValue(secondHex);
};

const getHexValue = (digit) => {
  const rgbToHex = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  return rgbToHex[digit.toString()];
};

// convert to hev

function hexStringToRGB(hexString) {
  // Usuń ewentualne znaki # z początku
  hexString = hexString.replace(/^#/, "");

  // Jeśli długość hexString jest nieprawidłowa, zwróć null
  if (hexString.length !== 6) {
    return null;
  }

  // Podziel hexString na trzy części (po dwie cyfry) dla czerwonego, zielonego i niebieskiego
  var redHex = hexString.substring(0, 2);
  var greenHex = hexString.substring(2, 4);
  var blueHex = hexString.substring(4, 6);

  // Konwertuj każdą część na liczbę dziesiętną
  var red = parseInt(redHex, 16);
  var green = parseInt(greenHex, 16);
  var blue = parseInt(blueHex, 16);

  // Zwróć obiekt RGB
  return { r: red, g: green, b: blue };
}
