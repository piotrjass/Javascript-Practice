function orderWeight(str) {
  const results = [];
  const arr = str.split(" ").map((el) => {
    results.push(el.split("").reduce((acc, val) => acc + Number(val), 0));
  });
  arrNums = str.split(" ").map(Number);
  const obj = {};

  for (let i = 0; i < results.length; i++) {
    obj[str.split(" ")[i]] = results[i];
  }
  const sortedArray = Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .map((entry) => parseInt(entry[0]));
  return sortedArray;
}

function orderWeight(strng) {
  const sum = (str) => str.split("").reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng.split(" ").sort(comp).join(" ");
}

// albo prościej:

function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function (v) {
      return {
        val: v,
        key: v.split("").reduce(function (prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0),
      };
    })
    .sort(function (a, b) {
      return a.key == b.key ? a.val.localeCompare(b.val) : a.key - b.key;
    })
    .map(function (v) {
      return v.val;
    })
    .join(" ");
}
