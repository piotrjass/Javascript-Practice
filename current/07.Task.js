function cakes(recipe, available) {
  // uzyskujemy dostep do wartosci, zwraca tak jakby tablice klucz do
  const r = Object.keys(recipe);
  const a = Object.keys(available);
  // sprawdzamy czy mamy wszystkie skladniki
  const hasIng = r.every((el) => a.includes(el));
  if (!hasIng) return 0;
  // tutaj gromadzimy wyniki dzielenia
  const res = [];
  //
  for (let i = 0; i < r.length; i++) {
    q1 = recipe[r[i]];
    q2 = available[r[i]];
    res.push(Math.floor(q2 / q1));
  }
  return Math.min(...res);
}
