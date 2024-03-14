function XO(str) {
  let sumX = 0;
  let sumO = 0;

  [...str].forEach((el) => {
    if (el === "x" || el === "X") {
      sumX++;
    }
    if (el === "o" || el === "O") {
      sumO++;
    }
  });

  return sumX === sumO;
}

// lub

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// albo

const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};
