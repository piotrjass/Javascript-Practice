function score(dice) {
  const scoreObj = {};
  let score = 0;
  for (const sc of [...dice]) {
    scoreObj[sc] = (scoreObj[sc] || 0) + 1;
  }

  for (const key in scoreObj) {
    if (scoreObj[key] >= 3 && key !== "1") {
      score += Number(key) * 100;
    }
    if (scoreObj[key] >= 3 && key === "1") {
      score += 1000;
    }
    if (scoreObj[key] >= 1 && key === "1") {
      score += 100;
    }
    if (scoreObj[key] >= 1 && key === "5") {
      score += 50;
    }
  }
  return score;
}
