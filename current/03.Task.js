function solution(number) {
  if (number < 0) return 0;
  const res = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      res.push(i);
    }
  }
  return res.reduce((acc, val) => acc + val, 0);
}
