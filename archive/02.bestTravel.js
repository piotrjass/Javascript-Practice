function chooseBestSum(t, k, ls) {
  var sums = [];
  if (ls.length < k) return null;
  function rec(start, end, step, sum) {
    for (start; start <= end; start++) {
      if (step == 1) {
        sums.push(sum + ls[start]);
      } else {
        rec(start + 1, end + 1, step - 1, sum + ls[start]);
      }
    }
  }
  rec(0, ls.length - k, k, 0);
  sums = sums.sort((a, b) => b - a);
  for (var i = 0; i < sums.length; i++) {
    if (sums[i] <= t) return sums[i];
  }
  return null;
}
