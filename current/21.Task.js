// url https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

function ipsBetween(start, end) {
  const ip1 = start.split(".");
  const ip2 = end.split(".");

  let result = 0;
  for (let i = 0; i < 4; i++) {
    result += (ip2[i] - ip1[i]) * 256 ** (3 - i);
  }

  return result;
}
