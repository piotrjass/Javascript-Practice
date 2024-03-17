function cakes(recipe, available) {
  const r = Object.keys(recipe);
  const a = Object.keys(available);
  // check if we have the ingrediens
  const hasIng = r.every((el) => a.includes(el));
  if (!hasIng) return 0;
  //
  const res = [];
  for (let i = 0; i < r.length; i++) {
    q1 = recipe[r[i]];
    q2 = available[r[i]];
    res.push(Math.floor(q2 / q1));
  }
  return Math.min(...res);
}

// najkrócej

const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );
