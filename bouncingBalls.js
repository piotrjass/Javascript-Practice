function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let bounces = 0;
  while (h > window) {
    console.log(h);
    bounces++; // bo spada
    h = h - h * (1 - bounce);
    if (h > window) {
      bounces++;
    }
  }
  return bounces;
}

// lub

function bouncingBall(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce);
  return rebounds;
}

// lub

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1;
  let seen = 0;

  while (h > window) {
    seen += 1;
    h *= bounce;
    if (h > window) seen += 1;
  }

  return seen;
}
