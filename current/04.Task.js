function createPhoneNumber(arr) {
  const firstThreeNumbers = arr.slice(0, 3).join("");
  const secondThreeNumbers = arr.slice(3, 6).join("");
  const lastFourNumbers = arr.slice(6, 10).join("");
  console.log(firstThreeNumbers, secondThreeNumbers, lastFourNumbers);
  return `(${firstThreeNumbers}) ${secondThreeNumbers}-${lastFourNumbers}`;
}

// albo tak

function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ") " +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
}

// albo tak

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}
