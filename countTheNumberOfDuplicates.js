function duplicateCount(text) {
  let counter = 0;
  let unique = [];
  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (
        text[i].toLowerCase() === text[j].toLowerCase() &&
        !unique.includes(text[i].toLowerCase())
      ) {
        unique.push(text[i].toLowerCase());
        counter++;
        break;
      }
    }
  }
  return counter;
}

// lub po prostu
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

// lub inne

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
