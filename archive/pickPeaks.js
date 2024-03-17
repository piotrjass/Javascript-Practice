function pickPeaks(arr) {
  if (arr.length === 0) {
    return { pos: [], peaks: [] };
  }

  const pos = [];
  const peaks = [];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      pos.push(i);
      peaks.push(arr[i]);
    } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
      let plateauStart = i;
      while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
        i++;
      }
      if (arr[i] > arr[i + 1]) {
        pos.push(plateauStart);
        peaks.push(arr[plateauStart]);
      }
    }
  }

  return { pos, peaks };
}
