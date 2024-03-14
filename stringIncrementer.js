function incrementString(input) {
  var splits = input.split(/(\d+)$/),
    num = 1;
  if (splits[1] !== undefined) num = parseInt(splits[1]) + 1;
  return splits[0] + num;
}

// or

function incrementString(str) {
  const regex = /[1-9][0-9]*|0[1-9]*|0$/;
  const num = str.match(regex);
  newStr = str.replace(num, "");
  console.log(newStr);
  const inc = (Number(num) + 1).toString().padStart(num.length, "0");
  result = newStr + inc.toString();
  return result;
}

// a najlepiej:

function incrementString(str) {
  return str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
}
