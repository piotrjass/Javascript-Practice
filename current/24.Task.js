// url https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript

function josephus(arr, k) {
  const res = [];
  let index = 0;
  while (arr.length > 0) {
    index = (index + k - 1) % arr.length;
    console.log(index);
    console.log(arr);
    res.push(arr.splice(index, 1)[0]);
  }
  return res;
}
