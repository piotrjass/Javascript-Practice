function dblLinear(n) {
  let u = [1];
  let xi = 0,
    yi = 0;
  for (let i = 0; i < n; i++) {
    let nextX = 2 * u[xi] + 1;
    let nextY = 3 * u[yi] + 1;
    if (nextX <= nextY) {
      u.push(nextX);
      xi++;
      if (nextX == nextY) {
        yi++;
      }
    } else {
      u.push(nextY);
      yi++;
    }
  }
  return u[n];
}
