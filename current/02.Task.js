function moveZeros(arr) {
  const zeros = arr.filter((el) => el === 0);
  const nonZeros = arr.filter((el) => el !== 0);
  return [...nonZeros, ...zeros];
}
